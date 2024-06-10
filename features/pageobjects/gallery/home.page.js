import { $ } from "@wdio/globals";

export default class HomeGallery {
  get btnMenuCupertino() {
    return $(`//android.widget.Button[@text='Cupertino']`);
  }

  get btnMenuAlerts() {
    return $(`//android.widget.Button[@text='Alerts']`);
  }

  getAlertButton(type) {
    return $(`//android.widget.Button[@text='${type}']`);
  }

  getAlertOption(choice) {
    return $(`//android.widget.Button[@text='${choice}']`);
  }

  getAlertMessage(choice) {
    return $(`//android.view.View[@text='You selected: ${choice}']`);
  }
}
