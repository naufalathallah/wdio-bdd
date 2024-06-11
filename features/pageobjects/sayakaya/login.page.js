import { $ } from "@wdio/globals";

class LoginPage {
  get btnLoginRegister() {
    return $(`~Login / Register SayaKaya`);
  }

  get triggerEmail() {
    return $(`//android.view.View[2]/android.widget.EditText`);
  }

  get inputEmail() {
    return $(`//android.widget.ScrollView/android.widget.EditText`);
  }

  get btnNext() {
    return $(`//android.widget.ScrollView/android.widget.Button[4]`);
  }

  get inputPassword() {
    return $(`//android.widget.ScrollView/android.widget.Button[3]`);
  }

  get btnLogin() {
    return $(`(//android.widget.Button[@content-desc="Login"])[2]`);
  }

  get btnKirimOTP() {
    return $(`~Kirim OTP ke Whatsapp`);
  }

  get otpTextElement() {
    return $(
      "//android.widget.LinearLayout/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.TextView[2]"
    );
  }

  get btnClearAllNotifications() {
    return $(`~Clear all notifications.`);
  }

  get homeTab() {
    return $(`~Home\nTab 1 dari 5`);
  }

  async login(email, password) {
    await this.btnLoginRegister.click();
    await this.triggerEmail.click();
    await this.inputEmail.setValue(email);
    await this.btnNext.click();
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
    await this.btnKirimOTP.click();
  }

  async enterOTP(otpCode) {
    for (const digit of otpCode) {
      await driver.keys(digit);
    }
    for (let i = 0; i < 6; i++) {
      await $(`~0`).click();
    }
  }

  async verifyHomeTabDisplayed() {
    await expect(this.homeTab).toBeDisplayed();
  }

  async openNotifBar() {
    const startX = 500;
    const startY = 0;
    const endX = 500;
    const endY = 1500;

    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: startX, y: startY },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 500 },
          {
            type: "pointerMove",
            duration: 1000,
            origin: "viewport",
            x: endX,
            y: endY,
          },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);

    await driver.pause(1000);
  }
}

export default new LoginPage();
