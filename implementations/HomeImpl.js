import HomePage from '../pages/HomePage.js'

const homePage = new HomePage()

export default class HomeImpl{
  constructor(){}

  async verify_successful_signin(fullname){
    await homePage.verify_successful_signin(fullname)
  }

  async user_sign_out(){
    await homePage.click_signout_link()
  }

  async user_sign_in(){
    await homePage.click_signin_link()
  }

  async enter_search_text(value){
    await homePage.enter_search_text(value)
  }

  async press_search_button(){
    await homePage.click_search_button()
  }
}
