import LoginPage from "../features/pageobjects/sayakaya/login.page.js";

export async function loginToSayakaya() {
  await LoginPage.login(process.env.USER_EMAIL, process.env.USER_PASS);
  await LoginPage.openNotifBar();

  const otpText = await LoginPage.otpTextElement.getText();
  const otpCode = otpText.substring(0, 6);
  console.log(`OTP Code: ${otpCode}`);

  await LoginPage.btnClearAllNotifications.click();
  await driver.pause(2000);

  await LoginPage.enterOTP(otpCode);
  await LoginPage.verifyHomeTabDisplayed();
}
