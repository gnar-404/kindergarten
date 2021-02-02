package lt.vtmc.kindergarten.service;

import lt.vtmc.kindergarten.dao.DistrictDao;
import lt.vtmc.kindergarten.domain.District;
import lt.vtmc.kindergarten.dto.DistrictDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Validated
public class DistrictService {

    @Autowired
    private DistrictDao districtDao;


    @Transactional(readOnly = true)
    public DistrictDto getDistrict(Long id){
        District district = districtDao.getOne(id);
        return new DistrictDto(district);
    }

    @Transactional
    public List<DistrictDto> getDistricts(){
        List<District> districts = districtDao.findAll();
        List<DistrictDto> districtList= districts.stream().map(district -> new DistrictDto(district)).collect(Collectors.toList());
        return districtList;
    }


    @Transactional
    public void addDistrict(@Valid DistrictDto districtDto){
        District district = new District();
        district.setTitle(districtDto.getTitle());
        districtDao.save(district);
    }

    @Transactional
    public void updateDistrict(Long id, DistrictDto districtDto){
        District district = districtDao.getOne(id);
        district.setTitle(districtDto.getTitle());
        districtDao.save(district);
    }
}
