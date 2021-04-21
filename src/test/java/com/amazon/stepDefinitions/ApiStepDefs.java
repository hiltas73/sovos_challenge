package com.amazon.stepDefinitions;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.HashMap;
import java.util.Map;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
public class ApiStepDefs {

    Response response;
    String baseURI = "http://fakerestapi.azurewebsites.net/api/v1/Users";

    @When("I get the current user information from api")
    public void i_get_the_current_user_information_from_api() {
        given().accept(ContentType.JSON)
                .when().log().all().get(baseURI)
                .then().statusCode(200)
                .and().contentType(equalTo("application/json; charset=utf-8; v=1.0"))
                .log().all()
        ;
    }
    @When("I repost existing user information")
    public void i_repost_existing_user_information() {
            Map<String,Object> postRequestMap = new HashMap<>();
            postRequestMap.put("id","1");
            postRequestMap.put("userName","user1");
            postRequestMap.put("password","password1");
            response = given().log().all()
                .and()
                .contentType(ContentType.JSON)
                .and()
                .body(postRequestMap).
                        when()
                .post(baseURI);
    }

    @Then("status code should be {int}")
    public void statusCodeShouldBe(int status) {

       Assert.assertEquals(status, response.statusCode());
    }

    @When("I post a new user information")
    public void iPostANewUserInformation() {
        Map<String,Object> postRequestMap = new HashMap<>();
        postRequestMap.put("id","11");
        postRequestMap.put("userName","user11");
        postRequestMap.put("password","password11");
         response = given().log().all()
                .and()
                .contentType(ContentType.JSON)
                .and()
                .body(postRequestMap).
                         when()
                .post(baseURI);
    }


    @When("I retrieve existing user status code should be {int}")
    public void i_retrieve_existing_user_status_code_should_be(Integer int1) {
        given().accept(ContentType.JSON)
                .when().log().all().get(baseURI+"/11")
                .then().statusCode(200)
                .and().contentType(equalTo("application/json; charset=utf-8; v=1.0"))
                .log().all();
    }

    @Then("status code must be {int}")
    public void statusCodeMustBe(int statusCode) {

        Assert.assertEquals(statusCode, response.statusCode());
    }

    @When("I send get request using {int}")
    public void iSendGetRequestUsing(int ID) {

        response = given().accept(ContentType.JSON)
                .when().log().all().get(baseURI+"/"+ID);
    }
}


