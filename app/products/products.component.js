module.exports = {
   bindings:     {
     products: '<'
   },
   controller:   ProductsController,
   templateUrl:  ['App', function (App) {
     return App.template('./products/products');
   }]
};

ProductsController.$inject = [];

function ProductsController () {
   console.log(this.products)
}
