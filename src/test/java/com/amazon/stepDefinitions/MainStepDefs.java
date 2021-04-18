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
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;

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

        WebDriverWait wait = new WebDriverWait(Driver.get(), 5);
        wait.until(ExpectedConditions.numberOfElementsToBeMoreThan((By.cssSelector("div[data-keyword]")), 1));
        List<WebElement> searchSuggestions = Driver.get().findElements(By.cssSelector("div[data-keyword]"));
        List<String> suggestions = new ArrayList<>();
        // always  there are 10 suggestions
        // sometimes second line in the dropDown    addressing  to first product's  category
        // in that case case we must remove that from our list
        if (searchSuggestions.size()==11) searchSuggestions.remove(1);
        for (int i = 0; i < searchSuggestions.size(); i++) {
            suggestions.add(searchSuggestions.get(i).getText());
        }
        for (int i = 0; i < suggestions.size(); i++) {
            System.out.println("suggestions.get(i) = " + suggestions.get(i));
            Assert.assertTrue("Suggestions contains searched keyword", suggestions.get(i).toLowerCase().contains(searchWord.toLowerCase()));
        }
        for (WebElement  suggestion : searchSuggestions) {
            System.out.println("s-sugguesss " + suggestion.getText());
        }
    }
    }



