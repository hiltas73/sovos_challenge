$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Search.feature");
formatter.feature({
  "name": "Search functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user enters \"\u003ckeyword\u003e\" on the search box",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks the search button",
  "keyword": "And "
});
formatter.step({
  "name": "the same \"\u003ckeyword\u003e\" should be seen on the result text",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "keyword"
      ]
    },
    {
      "cells": [
        "PS5"
      ]
    },
    {
      "cells": [
        "PS4"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.MainStepDefs.the_user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user enters \"PS5\" on the search box",
  "keyword": "When "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.MainStepDefs.the_user_enters_on_the_search_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.MainStepDefs.the_user_clicks_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the same \"PS5\" should be seen on the result text",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.MainStepDefs.theSameShouldBeSeenOnTheResultText(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.MainStepDefs.the_user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user enters \"PS4\" on the search box",
  "keyword": "When "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.MainStepDefs.the_user_enters_on_the_search_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.MainStepDefs.the_user_clicks_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the same \"PS4\" should be seen on the result text",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.MainStepDefs.theSameShouldBeSeenOnTheResultText(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.MainStepDefs.the_user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user enters \"Mehmet\" on search box",
  "keyword": "When "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.MainStepDefs.theUserEntersOnSearchBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the suggestions on drop down should start with \"Mehmet\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.MainStepDefs.theSuggestionsOnDropDownShouldStartWith(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});