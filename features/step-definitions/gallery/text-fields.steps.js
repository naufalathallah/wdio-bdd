import { When } from "@wdio/cucumber-framework";
import MaterialPage from "../../pageobjects/gallery/material.page.js";
import TextFieldPage from "../../pageobjects/gallery/text-field.page.js";

const materialPage = new MaterialPage();
const textFieldPage = new TextFieldPage();

When(/^I go to Text fields sub menu$/, async () => {
  await materialPage.navigateToTextField();
});

When(
  /^I fill the text field with (.*), (.*), (.*), (.*), (.*), and (.*)$/,
  async (name, phone, email, story, salary, password) => {
    const details = { name, phone, email, story, salary, password };
    await textFieldPage.fillTextFields(details);
  }
);

When(/^I click submit$/, async () => {
  await textFieldPage.submit();
});
