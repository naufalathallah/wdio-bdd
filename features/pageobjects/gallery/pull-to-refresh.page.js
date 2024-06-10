import { $ } from "@wdio/globals";

export default class PullToRefreshPage {
  get snackbarMessage() {
    return $(`//android.view.View[@text='Refresh complete']`);
  }

  async pullToRefresh() {
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(10)"
    );
  }

  async verifySnackbarMessage(message) {
    const snackbar = await this.snackbarMessage;
    await expect(snackbar).toHaveText(message);
  }
}
