import { $ } from "@wdio/globals";
import { scrollToEnd } from "../../../utils/helpers.js";

export default class MaterialPage {
  get btnPullToRefresh() {
    return $(
      `//android.widget.Button[@text='Pull to refresh\nRefresh indicators']`
    );
  }

  async navigateToPullToRefresh() {
    await scrollToEnd();
    await this.btnPullToRefresh.click();
  }

  get btnTextField() {
    return $(
      `//android.widget.Button[@text='Text fields\nSingle line of editable text and numbers']`
    );
  }

  async navigateToTextField() {
    await scrollToEnd();
    await this.btnTextField.click();
  }
}
