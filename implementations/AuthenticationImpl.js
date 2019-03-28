import HomePage from '../pages/HomePage.js'
import AuthenticationPage from '../pages/AuthenticationPage.js'
import Data from '../test_data/Data.js'
import { Util }  from '../utils/Util.js'

const homePage = new HomePage()
const authenticationPage = new AuthenticationPage()

export default class AuthenticationImpl{
  constructor(){}

  async existing_user_login(username, password){
    await homePage.click_signin_link()
    await authenticationPage.enter_user_creds_for_login(username, password)
    await authenticationPage.click_signin_button()
  }

  async new_user_email_registration (new_user_email_address) {
    await homePage.click_signin_link()
    await authenticationPage.enter_new_customer_email_address(new_user_email_address)
    await authenticationPage.click_create_account_button()
  }
}
