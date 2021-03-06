package lt.vtmc.kindergarten.dto;

import lt.vtmc.kindergarten.domain.Queue;
import lt.vtmc.kindergarten.domain.QueueStatusEnum;

import javax.validation.Valid;
import java.util.Date;

public class QueueDto {


    private Long id;

    private Date openingDate;

    private Date closingDate;

    private Date registrationClosingDate;

    private QueueStatusEnum status;

    public QueueDto() {
    }

    public QueueDto(@Valid Queue queue) {
        this.id = queue.getId();
        this.openingDate = queue.getOpeningDate();
        this.closingDate = queue.getClosingDate();
        this.registrationClosingDate = queue.getRegistrationClosingDate();
        this.status = queue.getStatus();
    }

    public Date getRegistrationClosingDate() {
        return registrationClosingDate;
    }

    public void setRegistrationClosingDate(Date registrationClosingDate) {
        this.registrationClosingDate = registrationClosingDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getOpeningDate() {
        return openingDate;
    }

    public void setOpeningDate(Date openingDate) {
        this.openingDate = openingDate;
    }

    public Date getClosingDate() {
        return closingDate;
    }

    public void setClosingDate(Date closingDate) {
        this.closingDate = closingDate;
    }

    public QueueStatusEnum getStatus() {
        return status;
    }

    public void setStatus(QueueStatusEnum status) {
        this.status = status;
    }
}
