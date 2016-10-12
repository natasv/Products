module.exports = HttpProviderConfig;

HttpProviderConfig.$inject = ['$httpProvider'];

function HttpProviderConfig($httpProvider) {
  $httpProvider.interceptors.push(Interceptor);
}

Interceptor.$inject = ['$q', '$injector'];

function Interceptor($q, $injector) {

  var errorsHandlers = {
    401: function (error) {
      $injector.get('$state').go('login', null, { location: false });
    }
  };

  return {
    request: function (config) {
      return config;
    },
    responseError: function (rejection) {
      return $q.reject(rejection);
    }
  };
}
