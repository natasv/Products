module.exports = homeRoutes;

homeRoutes.$inject = ['$stateProvider'];

function homeRoutes ($stateProvider) {

   $stateProvider
     .state('root.app.products', {
        url: '/',
        views :{
          '' : {
            template: '<products products="$resolve.products"></products>',
          }
        },
        resolve: {
          products: ['BaseModel', function(BaseModel) {
            return BaseModel.getProducts().$promise;
          }]
        }
     })
}
