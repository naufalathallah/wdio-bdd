import { When, Then, After } from "@wdio/cucumber-framework";
import HomePage from "../pageobjects/gallery/home.page.js";
import MaterialPage from "../pageobjects/gallery/material.page.js";
import PullToRefreshPage from "../pageobjects/gallery/pull-to-refresh.page.js";

const homePage = new HomePage();
const materialPage = new MaterialPage();
const pullToRefreshPage = new PullToRefreshPage();

After(async () => {
  await driver.back();
  await driver.back();
});

When(/^I go to the Material menu$/, async () => {
  await homePage.navigateToMaterial();
});

When(/^I go to Pull to refresh sub menu$/, async () => {
  await materialPage.navigateToPullToRefresh();
});

When(/^I pull to refresh the content$/, async () => {
  await pullToRefreshPage.pullToRefresh();
});

Then(/^I verify that the snackbar shows (.*)$/, async (message) => {
  await pullToRefreshPage.verifySnackbarMessage(message);
});
