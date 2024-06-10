import { $ } from "@wdio/globals";

export default class HomePage {
  get btnMenuCupertino() {
    return $(`//android.widget.Button[@text='Cupertino']`);
  }

  async navigateToCupertino() {
    await this.btnMenuCupertino.click();
  }

  get btnMenuMaterial() {
    return $(`//android.widget.Button[@text='Material']`);
  }

  async navigateToMaterial() {
    await this.btnMenuMaterial.click();
  }
}
