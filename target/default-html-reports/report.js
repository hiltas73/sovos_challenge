$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Search.feature");
formatter.feature({
  "name": "Search functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
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
  "name": "the user start typing any \"\u003cchars\u003e\" in text box",
  "keyword": "When "
});
formatter.step({
  "name": "drop down suggestions should appear",
  "keyword": "And "
});
formatter.step({
  "name": "the suggested words should start with the same \"\u003cchars\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "chars"
      ]
    },
    {
      "cells": [
        "P"
      ]
    },
    {
      "cells": [
        "PS"
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
  "name": "the user start typing any \"P\" in text box",
  "keyword": "When "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.MainStepDefs.theUserStartTypingAnyInTextBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "drop down suggestions should appear",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.MainStepDefs.dropDownSuggestionsShouldAppear()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c10\u003e but was:\u003c0\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat com.amazon.stepDefinitions.MainStepDefs.dropDownSuggestionsShouldAppear(MainStepDefs.java:54)\r\n\tat ✽.drop down suggestions should appear(file:///C:/Users/Hp/IdeaProjects/sovos_challanges/src/test/resources/features/Search.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the suggested words should start with the same \"P\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.MainStepDefs.theSuggestedWordsShouldStartWithTheSame(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
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
  "name": "the user start typing any \"PS\" in text box",
  "keyword": "When "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.MainStepDefs.theUserStartTypingAnyInTextBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "drop down suggestions should appear",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.MainStepDefs.dropDownSuggestionsShouldAppear()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c10\u003e but was:\u003c0\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat com.amazon.stepDefinitions.MainStepDefs.dropDownSuggestionsShouldAppear(MainStepDefs.java:54)\r\n\tat ✽.drop down suggestions should appear(file:///C:/Users/Hp/IdeaProjects/sovos_challanges/src/test/resources/features/Search.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the suggested words should start with the same \"PS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.MainStepDefs.theSuggestedWordsShouldStartWithTheSame(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
});