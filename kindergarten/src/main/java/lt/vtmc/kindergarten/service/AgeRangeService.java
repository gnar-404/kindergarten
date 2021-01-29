package lt.vtmc.kindergarten.service;

import lt.vtmc.kindergarten.dao.AgeRangeDao;
import lt.vtmc.kindergarten.domain.AgeRange;
import lt.vtmc.kindergarten.dto.AgeRangeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AgeRangeService {

    @Autowired
    private AgeRangeDao ageRangeDao;

    @Transactional
    public List<AgeRangeDto> getAgeRanges(){
        List<AgeRange> ageRanges = ageRangeDao.findAll();

        List<AgeRangeDto> ageRangeList = ageRanges.stream().map(ageRange -> new AgeRangeDto(ageRange)).collect(Collectors.toList());

        return ageRangeList;
    }

    @Transactional
    public AgeRangeDto getAgeRange(Long id) {
        AgeRange ageRange = ageRangeDao.getOne(id);
        return new AgeRangeDto(ageRange);
    }



    @Transactional
    public void addAgeRange(AgeRangeDto ageRangeDto){
        AgeRange ageRange = new AgeRange();

        ageRange.setAgeMin(ageRangeDto.getMinAge());
        ageRange.setAgeMax(ageRangeDto.getMaxAge());

        ageRangeDao.save(ageRange);
    }

    @Transactional
    public void updateAgeRange(Long id, AgeRangeDto ageRangeDto){
        AgeRange ageRange = ageRangeDao.getOne(id);

        ageRange.setAgeMin(ageRangeDto.getMinAge());
        ageRange.setAgeMax(ageRangeDto.getMaxAge());

        ageRangeDao.save(ageRange);
    }

}
