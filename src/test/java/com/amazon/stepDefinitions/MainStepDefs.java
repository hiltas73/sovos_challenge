package com.amazon.stepDefinitions;

import com.amazon.pages.SearchFunction;
import com.amazon.utilities.BrowserUtils;
import com.amazon.utilities.ConfigurationReader;
import com.amazon.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

public class MainStepDefs {

    SearchFunction searchFunction = new SearchFunction();

    @Given("the user is on the home page")
    public void the_user_is_on_the_home_page() {
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
    }

    @When("the user enters {string} on the search box")
    public void the_user_enters_on_the_search_box(String keyword) {

        searchFunction.searchBox.sendKeys(keyword);
    }

    @And("the user clicks the search button")
    public void the_user_clicks_the_search_button() {

        searchFunction.clickButton.click();
    }

    @Then("the same {string} should be seen on the result text")
    public void theSameShouldBeSeenOnTheResultText(String keyword) {
        String expectedResult = "\"" + keyword + "\"";
        String actualResult = searchFunction.searchResultText.getText();
        Assert.assertEquals(actualResult, expectedResult);
    }

    @When("the user start typing any {string} in text box")
    public void theUserStartTypingAnyInTextBox(String chars) {

        searchFunction.searchBox.sendKeys(chars);

    }
    @And("drop down suggestions should appear")
    public void dropDownSuggestionsShouldAppear() throws InterruptedException {

        int dropDownSize = searchFunction.dropDownSuggestionOptions.size();
        Thread.sleep(2000);
        Assert.assertEquals(10, dropDownSize);
    }

    @Then("the suggested words should start with the same {string}")
    public void theSuggestedWordsShouldStartWithTheSame(String chars) {

        searchFunction.dropDownSuggestionOptions.get(9).getText().startsWith(chars);


    }

}

