import Data from '../../test_data/Data.js'
import ValidationMessages from '../../test_data/ValidationMessages.js'
import AuthenticationImpl from '../../implementations/AuthenticationImpl.js'
import RegistrationImpl from '../../implementations/RegistrationImpl.js'
import HomeImpl from '../../implementations/HomeImpl.js'
import ProductListingImpl from '../../implementations/ProductListingImpl.js'
import { Util }  from '../../utils/Util.js'

const data = new Data()
const message = new ValidationMessages()
const homeImpl = new HomeImpl()
const authenticationImpl = new AuthenticationImpl()
const registrationImpl = new RegistrationImpl()
const productListingImpl = new ProductListingImpl()

fixture `Signing in with an existing user`
  .page `http://automationpractice.com/index.php`
  .before( async ctx => {
    ctx.new_user_personal_info = data.new_user_personal_info
    ctx.new_user_address = data.new_user_address
    ctx.new_user_personal_info.email = ctx.new_user_personal_info.email + Util.randomString(3)
  })

test
  .before(async t => {
    await registrationImpl.register_new_user(t.fixtureCtx.new_user_personal_info, t.fixtureCtx.new_user_address, true)
    await homeImpl.user_sign_out()
  })
  ('Existing user logs in with valid credentials', async t => {
    await authenticationImpl.existing_user_login(t.fixtureCtx.new_user_personal_info.email, t.fixtureCtx.new_user_personal_info.password)
    await homeImpl.verify_successful_signin(t.fixtureCtx.new_user_personal_info.firstname + ' ' + t.fixtureCtx.new_user_personal_info.lastname)
  })

test
  .before( async t => {
    t.fixtureCtx.new_user_personal_info.password = t.fixtureCtx.new_user_personal_info.password + Util.randomString(3)
  })
  ('User logs in with invalid credentials', async t => {
    await authenticationImpl.existing_user_login(t.fixtureCtx.new_user_personal_info.email, t.fixtureCtx.new_user_personal_info.password)
    Util.verify_error_text(message.error_messages.authentication_failed_message)
  })
