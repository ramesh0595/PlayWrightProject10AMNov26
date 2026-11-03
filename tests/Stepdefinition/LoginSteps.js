const { chromium } = require("@playwright/test");
const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const utils = require("../Utility/BaseClass");
const LoginPage = require("../Pages/LoginPage");
const RegistrationPage = require("../Pages/RegistrationPage");

let login;
let register;

Given("The user should be in facebook page", async function () {
  console.log("-------Browser launch maintained in Hooks Class--------");
});

When(
  "The user has to fill the username {string} and password {string}",
  async function (user, pass) {
    login = new LoginPage(this.page);
    await login.enterUsername(user);
    await login.enterPassword(pass);
  },
);

When("The user has to click login button", async function () {
  await login.clickLogin();
});

Then("The user should be navigate the Invalid login page", async function () {
  const currentUrl = await utils.getPageURL(this.page);
  assert.ok(currentUrl.includes("Facebook"));
  console.log("-----User In Invalid Page------");
});

When("The user has to click the create new account button", async function () {
  register = new RegistrationPage(this.page);
  await register.clickCreateAccount();
});

When(
  "The user has to fill firstName,LastName and Other Details",
  async function () {
    await register.enterFirstName("Ramesh");
    await register.enterLastName("Kumar");
  },
);

When("The user has to click the submit button", async function () {
  await register.clickSubmit();
});

Then(
  "The user should be get successfully registered message",
  async function () {
    console.log("------User Successfully Registered------");
  },
);
