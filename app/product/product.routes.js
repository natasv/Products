module.exports = productRoutes;

productRoutes.$inject = ['$stateProvider'];

function productRoutes ($stateProvider) {

   $stateProvider
     .state('root.app.product', {
        url: '/product/:id',
        views :{
          '' : {
            template: '<product product="$resolve.product" reviews="$resolve.reviews"></product>',
          }
        },
        resolve: {
          product: ['BaseModel','$stateParams','lodash','$q','$state',
                  function(BaseModel, $stateParams,lodash, $q ,$state) {

            return  BaseModel.getProducts().$promise.then(function(products) {
              var defer = $q.defer();
              var id = parseInt($stateParams.id);
              var product = lodash.find(products, {'id' : id});
              if (product) {
                defer.resolve(product);
              } else {
                defer.reject(false);
              }

              return defer.promise;
            }).catch(function(err) {
              $state.go('root.app.home', null, {reload: true}); //TODO: fix reloading
            })
          }],
          reviews: ['product','ReviewsModel', function(product, ReviewsModel) {
            return ReviewsModel.getReviews({id: product.id}).$promise;
          }]
        }
     })
}
