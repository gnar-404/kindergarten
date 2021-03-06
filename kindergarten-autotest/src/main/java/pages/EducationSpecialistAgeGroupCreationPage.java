package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EducationSpecialistAgeGroupCreationPage extends AbstractPage {

     // buttons
    @FindBy(xpath = "//*[@id=\"root\"]/div/div/div[2]/div[2]/div/div[1]/form/div[4]/button")
    public WebElement buttonAgeGroupCreate;

    //text
    @FindBy(xpath = "//*[@id=\"root\"]/div/div/div[2]/div[2]/div/div[1]/form/div[3]")
    public WebElement successfulAgeGroupCreationText;

    @FindBy(xpath = "//*[@id=\"root\"]/div/div/div[2]/div[2]/div/div[1]/form/div[3]")
    public WebElement unsuccessfulSameAgeCreationText;

    public EducationSpecialistAgeGroupCreationPage(WebDriver driver) {
        super(driver);
    }
    

    // buttons
    public void clickAgeGroupCreateButton() {
        buttonAgeGroupCreate.click();
    }

    //text
    public String findSuccessfulAgeGroupCreationText() {
        return successfulAgeGroupCreationText.getText();
    }

    public String findUnsuccessfulSameAgeGroupCreationText() {
        return unsuccessfulSameAgeCreationText.getText();
    }
}