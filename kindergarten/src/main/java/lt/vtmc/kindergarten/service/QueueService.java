package lt.vtmc.kindergarten.service;

import ch.qos.logback.classic.Logger;
import lt.vtmc.kindergarten.dao.ApplicationAfterDistributionDao;
import lt.vtmc.kindergarten.dao.ApplicationDao;
import lt.vtmc.kindergarten.dao.QueueDao;
import lt.vtmc.kindergarten.domain.*;
import lt.vtmc.kindergarten.dto.QueueDto;
import lt.vtmc.kindergarten.dto.QueueDtoClosingDate;
import lt.vtmc.kindergarten.dto.QueueDtoWithOpeningDate;
import lt.vtmc.kindergarten.dto.QueueDtoRegistrationClosingDate;
import lt.vtmc.kindergarten.exception.RegistrationClosingValidationExeption;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;


@Service
@EnableScheduling
public class QueueService {

    @Autowired
    private QueueDao queueDao;

    @Autowired
    private ApplicationDao applicationDao;

    @Autowired
    private ApplicationService applicationService;

    @Autowired
    private ApplicationAfterDistributionDao applicationAfterDistributionDao;

    private static final Logger logger
            = (Logger) LoggerFactory.getLogger(QueueService.class);

    @Transactional
    public void addQueueWithOpeningDate(QueueDtoWithOpeningDate queueDtoWithOpeningDate) {
        List<Queue> queues = queueDao.findAll();
        QueueStatusEnum queueStatusEnumToFind = QueueStatusEnum.ACTIVE;

        boolean isThereOtherActiveQueue = queues.stream().anyMatch(queue -> queueStatusEnumToFind.equals(queue.getStatus()));

        if (!isThereOtherActiveQueue) {
            Queue queue = new Queue();
            queue.setOpeningDate(queueDtoWithOpeningDate.getOpeningDate());
            queue.setStatus(QueueStatusEnum.ACTIVE);

            queueDao.save(queue);
        }
    }

    @Transactional
    public void updateQueueWithRegistrationClosingDate(Long id, QueueDtoRegistrationClosingDate queueDto) {
        Queue queue = queueDao.getOne(id);

        if (queue.getStatus() == QueueStatusEnum.ACTIVE) {
            if (checkIfQueueRegistrationClosingDateIsAfterOpeningDate(id, queueDto)) {
                queue.setRegistrationClosingDate(queueDto.getRegistrationClosingDate());
                queueDao.save(queue);
            } else {
                throw new RegistrationClosingValidationExeption("Registration closing date should be after queue opening date");
            }
        }
    }

    @Transactional
    public void updateQueueWithClosingDateAndApplicationsStatus(Long id, QueueDtoClosingDate queueDto) {
        Queue queue = queueDao.getOne(id);
        if (queue.getStatus() == QueueStatusEnum.LOCKED) {
            queue.setClosingDate(queueDto.getClosingDate());
            queue.setStatus(QueueStatusEnum.INACTIVE);
            queueDao.save(queue);
            if (queue.getStatus() == QueueStatusEnum.INACTIVE) {
                List<Application> applications = applicationDao.findAll();
                applications.stream().forEachOrdered(application -> {
                    ApplicationAfterDistribution applicationAfterDistribution = applicationAfterDistributionDao.findApplicationByApplicationId(application.getId());
                    if(applicationAfterDistribution != null) {
                       application.setApplicationStatus(applicationAfterDistribution.getStatus());
                    }
                });
            }
        }

    }

    @Transactional(readOnly = true)
    public QueueDto getQueue(Long id) {
        Queue queue = queueDao.getOne(id);
        return new QueueDto(queue);
    }

    @Transactional(readOnly = true)
    public List<QueueDto> getQueues() {
        List<Queue> queues = queueDao.findAll(Sort.by(Sort.Direction.ASC, "openingDate"));
        List<QueueDto> queueList = queues.stream().map(queue -> new QueueDto(queue)).collect(Collectors.toList());
        return queueList;
    }

    public boolean checkIfQueueRegistrationClosingDateIsAfterOpeningDate(Long id, QueueDtoRegistrationClosingDate queueDto) {
        if (queueDto.getRegistrationClosingDate().after(queueDao.getOne(id).getOpeningDate())) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Checks for queue closing date and triggers lockdown if the deadline is met.
     * After lockdown is triggered - applications are parsed and queued.
     * Check for closing date happens every minute
     */
    @Scheduled(cron = "1 * * * * *")
    protected void startKindergartenRegistrations() {
        logger.info("Kindergaten registration started. Searching for active queue");
        Queue queue = queueDao.findByStatus(QueueStatusEnum.ACTIVE);

        if (queue != null && queue.getRegistrationClosingDate() != null && queue.getRegistrationClosingDate().before(new Date())) {

            logger.info("Getting all applications");
            List<Application> applicationList = applicationDao.findAll();
            logger.info(applicationList.size() + " applications found");

            logger.info("Queue is after due date. Closing queue.");
            queue.setStatus(QueueStatusEnum.LOCKED);
            logger.info("Saving queue");
            queueDao.save(queue);
            logger.info("Queue saved. Starting application status change to WAITING");

            applicationList.stream().filter(application -> application.getApplicationStatus() != ApplicationStatusEnum.REJECTED).forEach(application ->
                    {
                        application.setApplicationStatus(ApplicationStatusEnum.WAITING);
                        logger.info("Saving application: " + application.getId());
                        applicationDao.save(application);
                        logger.info("Application: " + application.getId() + " saved");
                    }
            );
            applicationService.calculateApplicationStatus();
        }
    }


}
