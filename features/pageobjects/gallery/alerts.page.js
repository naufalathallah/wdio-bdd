import { $ } from "@wdio/globals";

export default class AlertsPage {
  getAlertButton(type) {
    return $(`//android.widget.Button[@text='${type}']`);
  }

  getAlertOption(choice) {
    return $(`//android.widget.Button[@text='${choice}']`);
  }

  getAlertMessage(choice) {
    return $(`//android.view.View[@text='You selected: ${choice}']`);
  }

  async clickAlertButton(type) {
    await this.getAlertButton(type).click();
  }

  async clickAlertOption(choice) {
    await this.getAlertOption(choice).click();
  }

  async verifyAlertMessage(choice) {
    const alertMessage = await this.getAlertMessage(choice);
    await expect(alertMessage).toBeDisplayed();
  }
}
