import { When } from "@wdio/cucumber-framework";

When(/^debugging$/, async () => {
  await driver.pause(10000);
  console.log("=========================\nIni di sayakaya");
});
