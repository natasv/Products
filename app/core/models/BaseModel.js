module.exports = BaseModel;

BaseModel.$inject = ['$resource', 'App'];

function BaseModel($resource, App) {
  var url = "http://smktesting.herokuapp.com/api";
  var model = $resource(url + '/:action/', {
    action: "@action"
  }, {
    login : {
      method : 'POST',
      params: {
        action : 'login'
      }
    },
    getProducts: {
      method : 'GET',
      isArray: true,
      params: {
        action : 'products'
      }
    }
  });

  return model;

}
