export default class Data{
   constructor(){
    this.new_user_personal_info =
      {
        firstname: 'Thor',
        lastname: 'Odinson',
        email: 'thor.odinson2@avengers.com',
        password: 'Point Break',
        dob: '14-January-1990',
        newsletter_signup: true,
        special_offer_signup: true,
        title: 'Mr'
      }


    this.new_user_address =
      {
        firstname: 'Thor',
        lastname: 'Odinson',
        address_line1: 'Asgard',
        address_line2: 'Galaxy',
        city: 'Greenwich',
        state: 'Arizona',
        postcode: '11111',
        phone_mobile: '0987654321',
        address_alias: 'Home',
        company: 'Avengers',
        additional_info: 'Jane Foster was my girlfriend',
        phone_home: '0987654321'
      }

    this.search_text =
      {
        valid_text: 'T-shirt',
        invalid_text: 'something',
        product_click: 'Blouse'
      }
  }
}
