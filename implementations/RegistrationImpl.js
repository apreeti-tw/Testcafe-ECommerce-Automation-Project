import HomePage from '../pages/HomePage.js'
import RegistrationPage from '../pages/RegistrationPage.js'
import AuthenticationImpl from '../implementations/AuthenticationImpl.js'
import Data from '../test_data/Data.js'
import { Util }  from '../utils/Util.js'

const homePage = new HomePage()
const registrationPage = new RegistrationPage()
const authenticationImpl = new AuthenticationImpl()

export default class RegistrationImpl{
  constructor(){}

  async register_new_user(new_user_personal_info, new_user_address, mandatory_only){
    await authenticationImpl.new_user_email_registration(new_user_personal_info.email)
    await registrationPage.enter_customer_personal_info(new_user_personal_info, mandatory_only)
    await registrationPage.enter_customer_address(new_user_address, mandatory_only)
    await registrationPage.click_register_button()
  }
}
