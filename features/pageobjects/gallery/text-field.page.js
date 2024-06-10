import { $ } from "@wdio/globals";
import { scrollToEnd } from "../../../utils/helpers.js";

export default class TextFieldPage {
  get inputName() {
    return $(`//android.widget.EditText[1]`);
  }

  get inputPhone() {
    return $(`//android.widget.EditText[2]`);
  }

  get inputEmail() {
    return $(`//android.widget.EditText[3]`);
  }

  get inputStory() {
    return $(`//android.widget.EditText[4]`);
  }

  get inputSalary() {
    return $(`//android.widget.EditText[5]`);
  }

  get inputPassword() {
    return $(`//android.widget.EditText[6]`);
  }

  get btnSubmit() {
    return $(`//android.widget.Button[@text='SUBMIT']`);
  }

  async fillTextFields(details) {
    const { name, phone, email, story, salary, password } = details;
    await this.inputName.waitForDisplayed();
    await this.inputName.setValue(name);

    await this.inputPhone.setValue(phone);
    await this.inputEmail.setValue(email);
    await this.inputStory.setValue(story);
    await this.inputSalary.setValue(salary);
    await this.inputPassword.setValue(password);
    await scrollToEnd();
  }

  async submit() {
    await this.btnSubmit.click();
  }
}
