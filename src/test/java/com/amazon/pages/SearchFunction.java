package com.amazon.pages;

import com.amazon.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;

public class SearchFunction extends BasePage {

    public SearchFunction() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "//input[@id='twotabsearchtextbox']")
    public WebElement searchBox;

    @FindBy(xpath = "//input[@value='Go']")
    public WebElement clickButton;

    @FindBy(xpath = "//div[@id='suggestions']")
    public List<WebElement> dropDownSuggestionOptions;

    public static void dropDownSuggestion(String searchWord) {
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



