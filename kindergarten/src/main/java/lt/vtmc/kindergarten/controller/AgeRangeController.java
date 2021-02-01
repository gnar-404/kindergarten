package lt.vtmc.kindergarten.controller;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lt.vtmc.kindergarten.dto.AgeRangeDto;
import lt.vtmc.kindergarten.service.AgeRangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class AgeRangeController {

    @Autowired
    private AgeRangeService ageRangeService;

    @RequestMapping(method = RequestMethod.GET, value = "/api/ageRanges")
    @ApiOperation(value="Get age ranges",notes ="Returns age ranges")
    @ResponseStatus(HttpStatus.OK)
    public List<AgeRangeDto> getAgeRanges(){
        return ageRangeService.getAgeRanges();
    }

    @ApiOperation(value = "Get single ageRange by id", notes="Returns a single ageRange by id")
    @RequestMapping(path="/api/ageRanges/{ageRange_id}",method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public AgeRangeDto getAgeRange(@PathVariable final Long ageRange_id){
        return ageRangeService.getAgeRange(ageRange_id);
    }

    @RequestMapping(value="/api/ageRanges", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    @ApiOperation(value = "Create age range", notes = "Creates a new age range")
    public void addAgeRange(
            @ApiParam(value = "Age range data", required = true)
            @Valid
            @RequestBody AgeRangeDto ageRangeDto){
        ageRangeService.addAgeRange(ageRangeDto);
    }

    @RequestMapping(value = "/api/ageRanges/{id}", method = RequestMethod.PUT)
    @ApiOperation(value = "Update age range", notes = "Uptades age range by id")
    @ResponseStatus(HttpStatus.OK)
    public void updateAgeRange(
            @ApiParam(value = "", required = true)
            @PathVariable Long id,
            @RequestBody AgeRangeDto ageRangeDto
    ){
        ageRangeService.updateAgeRange(id, ageRangeDto);
    }



}