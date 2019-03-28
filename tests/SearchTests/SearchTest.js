import Data from '../../test_data/Data.js'
import ValidationMessages from '../../test_data/ValidationMessages.js'
import ProductListingImpl from '../../implementations/ProductListingImpl.js'
import HomeImpl from '../../implementations/HomeImpl.js'
import { Util }  from '../../utils/Util.js'

const data = new Data()
const message = new ValidationMessages()
const homeImpl = new HomeImpl()
const productListingImpl = new ProductListingImpl()

fixture `Validating the search feature`
  .page `http://automationpractice.com/index.php`

test
  .before (async t => {
    t.ctx.searchText = data.search_text.valid_text
  })
  ('Valid product search using the search button', async t => {
    await homeImpl.enter_search_text(t.ctx.searchText)
    await homeImpl.press_search_button()
    await productListingImpl.validate_search_results(t.ctx.searchText)
  })

test
  .before (async t => {
    t.ctx.searchText = data.search_text.valid_text
  })
  ('Valid product search by pressing ENTER key', async t => {
    await homeImpl.enter_search_text(t.ctx.searchText)
    await Util.press_key('enter')
    await productListingImpl.validate_search_results(t.ctx.searchText)
  })

test
  .before (async t => {
    t.ctx.searchText = data.search_text.invalid_text
  })
  ('Invalid product search', async t => {
    await homeImpl.enter_search_text(t.ctx.searchText)
    await homeImpl.press_search_button()
    await Util.verify_warning_text(message.warning_messages.no_search_result_message)
  })
