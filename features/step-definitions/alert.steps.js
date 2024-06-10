import { Given, When, Then, After } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import HomeGallery from "../pageobjects/gallery/home.page.js";

const homeGallery = new HomeGallery();

After(async () => {
  await driver.back();
  await driver.back();
});

When(/^I go to the Cupertino menu$/, async () => {
  await homeGallery.btnMenuCupertino.click();
});

When(/^I go to Alerts sub menu$/, async () => {
  await homeGallery.btnMenuAlerts.click();
});

When(/^I click the button (.*)$/, async (type) => {
  const alertButton = homeGallery.getAlertButton(type);
  await alertButton.click();
});

When(/^I click the alert option (.*)$/, async (choice) => {
  const alertOption = homeGallery.getAlertOption(choice);
  await alertOption.click();
});

Then(/^I verify the message (.*) clicked is shown$/, async (choice) => {
  const alertMessage = await homeGallery.getAlertMessage(choice);
  await expect(alertMessage).toBeDisplayed();
});
