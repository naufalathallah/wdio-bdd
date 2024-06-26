import { When, Then, Given } from "@wdio/cucumber-framework";
import HomePage from "../../pageobjects/gallery/home.page.js";
import CupertinoPage from "../../pageobjects/gallery/cupertino.page.js";
import AlertsPage from "../../pageobjects/gallery/alerts.page.js";
import { doubleBack } from "../../../utils/helpers.js";

const homePage = new HomePage();
const cupertinoPage = new CupertinoPage();
const alertsPage = new AlertsPage();

When(/^I go to the Cupertino menu$/, async () => {
  await homePage.navigateToCupertino();
});

When(/^I go to Alerts sub menu$/, async () => {
  await cupertinoPage.navigateToAlerts();
});

When(/^I click the button (.*)$/, async (type) => {
  await alertsPage.clickAlertButton(type);
});

When(/^I click the alert option (.*)$/, async (choice) => {
  await alertsPage.clickAlertOption(choice);
});

Then(/^I verify the message (.*) clicked is shown$/, async (choice) => {
  await alertsPage.verifyAlertMessage(choice);
  await doubleBack();
});
