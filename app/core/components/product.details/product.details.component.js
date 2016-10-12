module.exports = {
   bindings:     {
     product: '<'
   },
   controller:   DetailsController,
   templateUrl:  ['App', function (App) {
     return App.template('core/components/product.details/details');
   }]
};

DetailsController.$inject = [];

function DetailsController () {
   console.log(this.product)
}
