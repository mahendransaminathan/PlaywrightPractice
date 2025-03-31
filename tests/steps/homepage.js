const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

Given("I am on the home page", async function () {
  this.browser = await require("playwright").chromium.launch({ headless: true });
  this.page = await this.browser.newPage();
  await this.page.goto("https://playwright.dev/");
});

When("I check for Get Started button", async function () {
  this.visible = await this.page.getByText("Get Started").isVisible();
});

Then("I should see the button", async function () {
  expect(this.visible).toBeTruthy();
  await this.browser.close();
});
