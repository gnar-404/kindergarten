package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ParentPrimaryInputPage extends AbstractPage {

    // text
    @FindBy(xpath = "//*[@id=\"root\"]/div/div/div[2]/div[2]/h1/strong")
    public WebElement parentPrimaryInfoInputTitle;

    // input
    @FindBy(id = "firstname")
    public WebElement inputFirstName;

    @FindBy(id = "lastname")
    public WebElement inputLastName;

    @FindBy(id = "personalCode")
    public WebElement inputPersonalCode;

    @FindBy(id = "address")
    public WebElement inputAddress;

    @FindBy(id = "postalCode")
    public WebElement inputPostalCode;

    @FindBy(id = "phoneNo")
    public WebElement inputPhoneNo;

    @FindBy(id = "email")
    public WebElement inputEmail;

    // button
    @FindBy(xpath = "//*[@id=\"root\"]/div/div/div[2]/div[2]/div/form/div[11]/button")
    public WebElement buttonParentPrimaryInputSave;

    public ParentPrimaryInputPage(WebDriver driver) {
        super(driver);
        // TODO Auto-generated constructor stub
    }

    // text
    public String findPrimaryInfoInputTitle() {
        return parentPrimaryInfoInputTitle.getText();
    }

    // input
    public void enterFirstName(String firstName) {
        inputFirstName.sendKeys(firstName);
    }

    public void enterLastName(String lastName) {
        inputLastName.sendKeys(lastName);
    }

    public void enterPersonalCode(String personalCode) {
        inputPersonalCode.sendKeys(personalCode);
    }

    public void enterAddress(String address) {
        inputAddress.sendKeys(address);
    }

    public void enterPostalCode(String postalCode) {
        inputPostalCode.sendKeys(postalCode);
    }

    public void enterPhoneNo(String phoneNo) {
        inputPhoneNo.sendKeys(phoneNo);
    }

    public void enterEmail(String email) {
        inputEmail.sendKeys(email);
    }

    // button
    public void clickParentPrimaryInputSaveButton() {
        buttonParentPrimaryInputSave.click();
    }
}
