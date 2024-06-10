import { $ } from "@wdio/globals";

export default class MaterialPage {
  get btnPullToRefresh() {
    return $(
      `//android.widget.Button[@text='Pull to refresh\nRefresh indicators']`
    );
  }

  async navigateToPullToRefresh() {
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)"
    );
    await this.btnPullToRefresh.click();
  }
}
