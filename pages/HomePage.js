import { Selector, t } from 'testcafe'

export default class HomePage{
  constructor(){
    //Sign In Link
    this.signInlink = Selector('.login')

    //Welcome typeText
    this.welcomeText = Selector('.account').find('span')

    //Log out Link
    this.signOut = Selector('.logout')

    //Search text field
    this.search_input = Selector('#search_query_top')

    //Search button
    this.search_button = Selector('.button-search')
  }

  async click_signin_link(){
    await t.click(this.signInlink)
  }

  async verify_successful_signin(fullname){
    await t.expect(this.welcomeText.innerText).eql(fullname)
  }

  async click_signout_link(){
    await t
      .click(this.signOut)
      .expect(this.signInlink.visible).ok('User logged out')
  }

  async click_search_button(){
    await t.click(this.search_button)
  }

  async enter_search_text(value){
    await t
      .typeText(this.search_input, value)
  }
}
