import { Selector, t } from 'testcafe'
import { Util } from '../utils/Util.js'

export default class AuthenticationPage{
  constructor(){
    //New user authentication fields
    this.new_email_address = Selector('#email_create')
    this.create_account_button = Selector('#SubmitCreate')

    //Exisiting user authentication fields
    this.customer_email_address = Selector('#email')
    this.password = Selector('#passwd')
    this.sign_in_button = Selector('#SubmitLogin')
  }

  async click_create_account_button(){
    await t.click(this.create_account_button)
  }

  async enter_new_customer_email_address(email){
    await t.typeText(this.new_email_address, email)
  }

  async enter_user_creds_for_login(username, password){
    await t
      .typeText(this.customer_email_address, username)
      .typeText(this.password, password)
  }

  async click_signin_button(){
    await t.click(this.sign_in_button)
  }
}
