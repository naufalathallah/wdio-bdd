import { $ } from "@wdio/globals";

export async function scrollToEnd() {
  await $(
    "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)"
  );
}

export async function verifySnackbarMessage(message) {
  const snackbar = await $(`//android.view.View[@text='${message}']`);
  await expect(snackbar).toBeDisplayed();
  await expect(snackbar).toHaveText(message);
}

export async function doubleBack() {
  await driver.back();
  await driver.back();
}
