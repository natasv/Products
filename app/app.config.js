module.exports = config;

config.$inject = ['$locationProvider','$resourceProvider', 'AclProvider', '$httpProvider'];

function config($locationProvider, $resourceProvider, AclProvider, $httpProvider) {

   $locationProvider.html5Mode({ enabled: true, requireBase: false }).hashPrefix('!');

   $resourceProvider.defaults.stripTrailingSlashes = false;

   $httpProvider.interceptors.push(HttpInceptor);

   HttpInceptor.$inject = ['$q', '$injector'];
    function HttpInceptor($q, $injector) {
      return {
        request: function (config) {
          var token = $injector.get('Acl').user.token;

          if (config.url.indexOf('api') > -1 && token) {
            console.log('api request')
            config.headers.Authorization = 'Token ' + token;
          }
          return config;
        },
        requestError: function (rejection) {
          return $q.reject(rejection);
        },
        response: function (response) {
          return response;
        },
        responseError: function (rejection) {

          if (rejection.status === 404 || rejection.status === 401) {
            $injector.get('$state').go('root.app.home');
          }

          return $q.reject(rejection);;
        }
      };
    }

   AclProvider.config({
    storage: 'localStorage',
    storageKey: 'AppAcl',
    defaultRole: 'guest',
    emptyActionDefault: true,
    defaultUser: {
      name: 'guest'
    },
    permissions: {
      guest: {
        actions: {
          'root.app.products': false,
          'root.app.product': false
        }
      },
      user: {
        actions: {
          'root.app.products' : true,
          'root.app.product': true
        }
      }
    }
  });

}
