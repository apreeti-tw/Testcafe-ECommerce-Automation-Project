import Data from '../../test_data/Data.js'
import ValidationMessages from '../../test_data/ValidationMessages.js'
import RegistrationImpl from '../../implementations/RegistrationImpl.js'
import AuthenticationImpl from '../../implementations/AuthenticationImpl.js'
import HomeImpl from '../../implementations/HomeImpl.js'
import { Util }  from '../../utils/Util.js'

const data = new Data()
const message = new ValidationMessages()
const registrationImpl = new RegistrationImpl()
const homeImpl = new HomeImpl()
const authenticationImpl = new AuthenticationImpl()

fixture `Registering a new user into the system`
  .page `http://automationpractice.com/index.php`
  .before (async ctx => {
    ctx.new_user_personal_info = data.new_user_personal_info
    ctx.new_user_address = data.new_user_address
  })

test
  .before(async t => {
    t.fixtureCtx.new_user_personal_info.email = t.fixtureCtx.new_user_personal_info.email + Util.randomString(3)
  })
  ('Creating a new valid user with all the information', async t => {
    await registrationImpl.register_new_user(t.fixtureCtx.new_user_personal_info, t.fixtureCtx.new_user_address, false)
    await homeImpl.verify_successful_signin(t.fixtureCtx.new_user_personal_info.firstname + ' ' + t.fixtureCtx.new_user_personal_info.lastname)
  })

test
  .before(async t => {
    t.fixtureCtx.new_user_personal_info.email = t.fixtureCtx.new_user_personal_info.email + Util.randomString(3)
  })
  ('Creating a new valid user with only mandatory information', async t => {
    await registrationImpl.register_new_user(t.fixtureCtx.new_user_personal_info, t.fixtureCtx.new_user_address, true)
    await homeImpl.verify_successful_signin(t.fixtureCtx.new_user_personal_info.firstname + ' ' + t.fixtureCtx.new_user_personal_info.lastname)
  })

test
  .before(async t => {
    t.fixtureCtx.new_user_personal_info.email = t.fixtureCtx.new_user_personal_info.email + Util.randomString(3)
    await registrationImpl.register_new_user(t.fixtureCtx.new_user_personal_info, t.fixtureCtx.new_user_address, true)
    await homeImpl.user_sign_out()
  })
  ('Verify whether user is not allowed to register if email id already exists', async t => {
    await authenticationImpl.new_user_email_registration(t.fixtureCtx.new_user_personal_info.email)
    await Util.verify_error_text(message.error_messages.duplicate_email_message)
  })
