package lt.vtmc.kindergarten.controller;

import lt.vtmc.kindergarten.TestUtils;
import lt.vtmc.kindergarten.dao.DistrictDao;
import lt.vtmc.kindergarten.dao.KindergartenDao;
import lt.vtmc.kindergarten.domain.*;
import lt.vtmc.kindergarten.dto.KindergartenDto;
import lt.vtmc.kindergarten.service.KindergartenService;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.DirtiesContext;


import static org.junit.jupiter.api.Assertions.*;

@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@SpringBootTest
@DisplayName("When running Kindergarten controller")
public class KindergartenControllerTest {

    @Autowired
    private KindergartenController kindergartenController;

    @Autowired
    private DistrictDao districtDao;

    @Autowired
    private KindergartenDao kindergartenDao;

    @Autowired
    private KindergartenService kindergartenService;

    @Test
    @Order(1)
    @DisplayName("create kindergarten")
    void testCreatingKindergarten() {
        District district = TestUtils.createDefaultDistrict("Antakalnis");
        Kindergarten kindergarten = TestUtils.createDefaultKindergarten("12345678");
        districtDao.save(district);
        kindergarten.setDistrict(district);
        kindergartenController.addKindergarten(new KindergartenDto(kindergarten));

        assertEquals(1, kindergartenController.getKindergartens().size(), "should create kindergarten");
    }

    @Test
    @Order(2)
    @DisplayName("get all groups by kindergarten id")
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    void testGetAllGroupsByKindergartenId() {
        District district = TestUtils.createDefaultDistrict("Antakalnis");
        Kindergarten kindergarten = TestUtils.createDefaultKindergarten("12345678");
        kindergarten.setDistrict(district);

        Group group = new Group();
        AgeRange ageRange = new AgeRange();
        ageRange.setAgeMin(1);
        ageRange.setAgeMax(2);
        group.setAgeRange(ageRange);
        group.setKindergartenId(kindergarten);
        group.setChildrenCount(10);
        kindergarten.addGroup(group);

        districtDao.save(district);
        kindergartenDao.save(kindergarten);

        assertEquals(1, kindergartenController.getGroups(kindergarten.getId()).size(), "Should get all groups by kindergarten id");
    }

    @Test
    @Order(3)
    @DisplayName("get one group by kindergarten id")
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.AFTER_METHOD)
    void testGetSingleGroupByKindergartenId() {
        districtDao.save(TestUtils.createDefaultDistrict("Antakalnis"));

        Kindergarten kindergarten = TestUtils.createDefaultKindergarten("132456778");
        kindergarten.setDistrict(districtDao.findByTitle("Antakalnis"));


        Group group = TestUtils.createDefaultGroup(kindergarten);
        Group group3 = new Group();
        AgeRange ageRange = new AgeRange();
        ageRange.setAgeMin(2);
        ageRange.setAgeMax(3);
        group3.setAgeRange(ageRange);
        group3.setKindergartenId(kindergarten);
        group3.setChildrenCount(13);

        kindergarten.addGroup(group);
        kindergarten.addGroup(group3);

        kindergartenDao.save(kindergarten);

        assertEquals(group3.getChildrenCount(), kindergartenController.getGroup(kindergarten.getId(), group3.getId()).getChildrenCount(), "Should get single group by kindergarten id");
    }

    @Test
    @Order(4)
    @DisplayName("get all kindergartens")
    void testGetAllKindergartens() {
        District district = TestUtils.createDefaultDistrict("Antakalnis");
        Kindergarten kindergarten = TestUtils.createDefaultKindergarten("12345678");

        districtDao.save(district);

        KindergartenDto kindergartenDto = new KindergartenDto(kindergarten);
        kindergartenDto.setDistrict(district);
        kindergartenController.addKindergarten(kindergartenDto);

        District district2 = new District();
        districtDao.save(district2);

        KindergartenDto secondKindergarten = new KindergartenDto(TestUtils.createDefaultKindergarten("190055590"));
        secondKindergarten.setDistrict(district2);
        kindergartenController.addKindergarten(secondKindergarten);

        assertEquals(2, kindergartenController.getKindergartens().size(), "should get all kindergartens");
    }

    @Test
    @Order(5)
    @DisplayName("update kindergarten by id")
    void testUpdateKindergarten() {
        District district = TestUtils.createDefaultDistrict("Antakalnis");
        districtDao.save(district);

        KindergartenDto kindergartenDto = new KindergartenDto(TestUtils.createDefaultKindergarten("12345688"));
        kindergartenDto.setDistrict(district);

        kindergartenController.addKindergarten(kindergartenDto);

        KindergartenDto kindergartenDto2 = new KindergartenDto(TestUtils.createDefaultKindergarten("12345682"));

        kindergartenDto2.setTitle("Pušaitė Update");
        kindergartenDto2.setAddress("Bistryčios g. 333");
        kindergartenDto2.setPostalCode("10321");
        District district2 = TestUtils.createDefaultDistrict("Pasilaiciai");
        districtDao.save(district2);
        kindergartenDto2.setDistrict(district2);

        kindergartenController.updateKindergarten(2L, kindergartenDto2);

        assertEquals("Pušaitė Update", kindergartenController.getKindergarten(2L).getTitle(), "should update the title correctly");
        assertEquals("Bistryčios g. 333", kindergartenController.getKindergarten(2L).getAddress(), "should update the address correctly");
        assertEquals("10321", kindergartenController.getKindergarten(2L).getPostalCode(), "should update the postal code correctly");
    }

    @Test
    @Order(6)
    @DisplayName("disallow duplicate kindergarten company codes")
    @DirtiesContext(methodMode = DirtiesContext.MethodMode.BEFORE_METHOD)
    void testCreateKindergartenWithDuplicateCompanyCode() {

        Kindergarten kindergarten = TestUtils.createDefaultKindergarten("12345888");
        KindergartenDto kindergartenDto = new KindergartenDto(TestUtils.createDefaultKindergarten("12345888"));
        District district = TestUtils.createDefaultDistrict("Antakalnis");
        districtDao.save(district);
        kindergartenDto.setDistrict(district);
        kindergartenController.addKindergarten(kindergartenDto);

        kindergartenDto.setDistrict(district);
        KindergartenDto secondKindergarten = new KindergartenDto(TestUtils.createDefaultKindergarten(kindergarten.getCompanyCode()));

        District district2 = TestUtils.createDefaultDistrict("Pilaite");
        districtDao.save(district2);
        secondKindergarten.setDistrict(district2);

        ResponseEntity response = kindergartenController.addKindergarten(secondKindergarten);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
    }

}
