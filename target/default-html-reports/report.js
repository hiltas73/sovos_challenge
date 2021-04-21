$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/user.feature");
formatter.feature({
  "name": "User Verification",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "Verify that user information can be retrieved",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "When "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.ApiStepDefs.i_get_the_current_user_information_from_api()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that system must not permit duplicate users",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I repost existing user information",
  "keyword": "When "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.ApiStepDefs.i_repost_existing_user_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 400",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.ApiStepDefs.statusCodeShouldBe(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat com.amazon.stepDefinitions.ApiStepDefs.statusCodeShouldBe(ApiStepDefs.java:44)\r\n\tat ✽.status code should be 400(file:///C:/Users/Hp/IdeaProjects/sovos_challanges/src/test/resources/features/user.feature:8)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "New user should be able to register",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I post a new user information",
  "keyword": "When "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.ApiStepDefs.iPostANewUserInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.ApiStepDefs.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Retrieve registered user information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I send get request using \u003cID\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "status code should be \u003cStatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ID",
        "StatusCode"
      ]
    },
    {
      "cells": [
        "1",
        "200"
      ]
    },
    {
      "cells": [
        "11",
        "404"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Retrieve registered user information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I send get request using 1",
  "keyword": "When "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.ApiStepDefs.iSendGetRequestUsing(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.ApiStepDefs.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrieve registered user information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I send get request using 11",
  "keyword": "When "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.ApiStepDefs.iSendGetRequestUsing(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 404",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.stepDefinitions.ApiStepDefs.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});