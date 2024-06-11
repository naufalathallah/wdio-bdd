class ProfilePage {
  get tabProfile() {
    return $(`~Profil\nTab 5 dari 5`);
  }

  async navigateToProfile() {
    await this.tabProfile.click();
  }

  async clickMenu(menu) {
    const selector = `~${menu}`;
    await $(selector).click();
  }

  async verifyTextDisplayed(expected) {
    const textElement = await $(`~${expected}`);
    await expect(textElement).toBeDisplayed();
  }
}

export default new ProfilePage();
