import { $ } from "@wdio/globals";

export default class HomePage {
  get btnMenuCupertino() {
    return $(`//android.widget.Button[@text='Cupertino']`);
  }

  async navigateToCupertino() {
    await this.btnMenuCupertino.click();
  }
}
