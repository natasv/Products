module.exports = {
  bindings: {
    product: '<',
    reviews: '<'
  },
  controller: ProductController,
  templateUrl: ['App', function(App) {
    return App.template('./product/product');
  }]
};

ProductController.$inject = [];

function ProductController() {

}
