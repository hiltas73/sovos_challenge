package com.amazon.stepDefinitions;

import com.amazon.pages.SearchFunction;
import com.amazon.utilities.ConfigurationReader;
import com.amazon.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class MainStepDefs {

    SearchFunction searchFunction = new SearchFunction();

    @Given("the user is on the home page")
    public void the_user_is_on_the_home_page() {
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
    }

    @When("the user enters {string} on the search box")
    public void the_user_enters_on_the_search_box(String keyword) throws InterruptedException {

        searchFunction.searchBox.sendKeys(keyword);

    }

    @And("the user clicks the search button")
    public void the_user_clicks_the_search_button() throws InterruptedException {

        searchFunction.clickButton.click();

    }

    @Then("the same {string} should be seen on the result text")
    public void theSameShouldBeSeenOnTheResultText(String keyword) throws InterruptedException {
        String expectedResult = "\"" + keyword + "\"";
        WebElement element = Driver.get().findElement(By.xpath("//span[contains(text(),'" + keyword + "')]"));
        String actualResult = element.getText();
        Assert.assertEquals(actualResult, expectedResult);
    }

    @When("the user enters {string} on search box")
    public void theUserEntersOnSearchBox(String searchItem) throws InterruptedException {

        searchFunction.searchBox.sendKeys(searchItem);

    }

    @Then("the suggestions on drop down should start with {string}")
    public void theSuggestionsOnDropDownShouldStartWith(String searchWord) {

        searchFunction.dropDownSuggestion(searchWord);

    }
}



