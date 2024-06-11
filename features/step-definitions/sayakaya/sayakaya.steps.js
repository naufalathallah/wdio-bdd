import { Given, When, Then } from "@wdio/cucumber-framework";
import ProfilePage from "../../pageobjects/sayakaya/profile.page.js";

Given(/^I am on the profile page$/, async () => {
  await ProfilePage.navigateToProfile();
});

When(/^I click (.*) account$/, async (menu) => {
  await ProfilePage.clickMenu(menu);
});

Then(/^I expect (.*) text to be displayed$/, async (expected) => {
  await ProfilePage.verifyTextDisplayed(expected);
  await driver.back();
});
