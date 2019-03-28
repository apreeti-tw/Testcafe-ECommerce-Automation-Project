import { Selector, t } from 'testcafe'

export default class ProductListingPage{
  constructor(){
    //Product list grid
    this.product_list_grid = Selector('.product_img_link')
    this.more_button = Selector('.lnk_view')
    this.quick_view_button = Selector('.quick-view')
  }

  async open_product_details(productname){
    var product_list_grid_count = await this.product_list_grid.count
    for (var i = 0; i < product_list_grid_count; i++){
      if (await this.product_list_grid.nth(i).getAttribute('title') === productname){
        await t
          .click(this.quick_view_button.nth(i))
          .wait(5000)
        break
      }
    }
  }

  async open_product_in_quick_view(productname){
    var product_list_grid_count = await this.product_list_grid.count
    for (var i = 0; i < product_list_grid_count; i++){
      if (await this.product_list_grid.nth(i).getAttribute('title') === productname){
        await t
          .click(this.quick_view_button.nth(i).parent(0))
          .wait(5000)
        break
      }
    }
  }

  async validate_search_results(searchText){
    var product_list_grid_count = await this.product_list_grid.count
    for (var i = 0; i < product_list_grid_count; i++){
      await t.expect(this.product_list_grid.nth(i).getAttribute('title')).contains(searchText)
    }
  }
}
