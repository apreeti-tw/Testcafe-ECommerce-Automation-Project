import { Selector, t } from 'testcafe'
import { Util } from '../utils/Util.js'

export default class RegistrationPage{
  constructor(){
    //'Your Personal Information' fields
    this.customer_firstname = Selector('#customer_firstname')
    this.customer_lastname = Selector('#customer_lastname')
    this.customer_email = Selector('#email')
    this.password = Selector('#passwd')
    this.newsletter_signup = Selector('#newsletter')
    this.special_offer_signup = Selector('#optin')
    this.dob_day = Selector('#days')
    this.dob_month = Selector('#months')
    this.dob_year = Selector('#years')
    this.gender_male = Selector('#id_gender1')
    this.gender_female = Selector('#id_gender2')

    //'Your Address' fields
    this.address_firstname = Selector('#firstname')
    this.address_lastname = Selector('#lastname')
    this.address_line1 = Selector('#address1')
    this.city = Selector('#city')
    this.state = Selector('#id_state')
    this.postcode = Selector('#postcode')
    this.country = Selector('#id_country')
    this.phone_mobile = Selector('#phone_mobile')
    this.address_alias = Selector('#alias')
    this.company = Selector ('#company')
    this.address_line2 = Selector('#address2')
    this.additional_info = Selector('#other')
    this.phone_home = Selector('#phone')

    //Register button
    this.register_button = Selector('#submitAccount')
  }

  async click_register_button(){
    await t.click(this.register_button)
  }

  async enter_customer_personal_info(new_user_personal_info, mandatory_only){
    if (mandatory_only === false) {
      if(new_user_personal_info.newsletter_signup === true)
        await t.click(this.newsletter_signup)

      if(new_user_personal_info.special_offer_signup === true)
        await t.click(this.special_offer_signup)

      if(new_user_personal_info.title === 'Mr')
        await t.click(this.gender_male)
      else if(new_user_personal_info.title === 'Mrs')
        await t.click(this.gender_female)

      const dob = new_user_personal_info.dob.split('-')
      await Util.select_options(this.dob_day,dob[0])
      await Util.select_options(this.dob_month,dob[1])
      await Util.select_options(this.dob_year,dob[2])
    }

    await t
      .typeText(this.customer_firstname,new_user_personal_info.firstname)
      .typeText(this.customer_lastname,new_user_personal_info.lastname)
      .typeText(this.password,new_user_personal_info.password)
  }

  async enter_customer_address(new_user_address, mandatory_only=true){
    if (mandatory_only === false) {
      await t
      .typeText(this.company,new_user_address.company)
      .typeText(this.address_line2, new_user_address.address_line2)
      .typeText(this.additional_info, new_user_address.additional_info)
      .typeText(this.phone_home, new_user_address.phone_home)
    }

    await t
      .typeText(this.address_line1,new_user_address.address_line1)
      .typeText(this.city,new_user_address.city)
      .typeText(this.postcode,new_user_address.postcode)
      .typeText(this.phone_mobile, new_user_address.phone_mobile)
    await Util.type_text(this.address_alias, new_user_address.address_alias)
    await Util.select_options(this.state, new_user_address.state)
  }
}
