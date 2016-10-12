module.exports = appRoutes;

appRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function appRoutes ($stateProvider, $urlRouterProvider) {

   $urlRouterProvider.otherwise(function ($injector) {
      var $state = $injector.get('$state');
      $state.go('root.app.products', null, {});
   });

   $stateProvider

      .state('root', {
         abstract: true,
         template: '<div ui-view="header"></div>'+
                   '<div ui-view=""></div>'
      })

      .state('root.app', {
         abstract: true,
         views :{
           'header' : {
             template : '<header></header>',
           },
           '' : {
             template : '<div ui-view></div>',
           }
         }
      });

}
