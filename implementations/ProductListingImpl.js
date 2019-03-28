import ProductListingPage from '../pages/ProductListingPage.js'
import HomePage from '../pages/HomePage.js'

const productListingPage = new ProductListingPage()
const homepage = new HomePage()

export default class ProductListingImpl{
  constructor(){}

  async open_product_by_image_click(productname){
    await productListingPage.open_product_in_quick_view(productname)
  }

  async validate_search_results(searchText){
    await productListingPage.validate_search_results(searchText)
  }
}
