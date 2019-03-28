import { Selector, t } from 'testcafe';

export class Util{
  static randomString(length){
    return Math.random().toString(36).substring(length)
  }

  static async select_options(locator, value){
    const optionList = locator.find('option')
    await t
      .click(locator)
      .click(optionList.withText(value))
  }

  static async type_text(locator, value){
    await t
      .click(locator)
      .pressKey('ctrl+a delete')
      .typeText(locator, value)
  }

  static async verify_error_text(errorMsg){
    await t.expect(Selector('.alert-danger').innerText).contains(errorMsg)
  }

  static async verify_warning_text(warningMsg){
    await t.expect(Selector('.alert-warning').innerText).contains(warningMsg)
  }

  static async press_key(key){
    await t.pressKey(key)
  }
}
