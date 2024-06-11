import { Then, When } from "@wdio/cucumber-framework";
import HomePage from "../../pageobjects/gallery/home.page.js";
import MaterialPage from "../../pageobjects/gallery/material.page.js";
import PullToRefreshPage from "../../pageobjects/gallery/pull-to-refresh.page.js";
import { doubleBack, verifySnackbarMessage } from "../../../utils/helpers.js";

const homePage = new HomePage();
const materialPage = new MaterialPage();
const pullToRefreshPage = new PullToRefreshPage();
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
  await verifySnackbarMessage(message);
  await doubleBack();
});
