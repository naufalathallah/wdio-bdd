import { $ } from "@wdio/globals";

export default class CupertinoPage {
  get btnMenuAlerts() {
    return $(`//android.widget.Button[@text='Alerts']`);
  }

  async navigateToAlerts() {
    await this.btnMenuAlerts.click();
  }
}
