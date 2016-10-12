module.exports = ReviewsModel;

ReviewsModel.$inject = ['$resource', 'App'];

function ReviewsModel($resource, App) {
  var url = "http://smktesting.herokuapp.com/api";
  var model = $resource(url + '/reviews/:id', {
    action: "@id"
  }, {
    getReviews : {
      method : 'GET',
      isArray: true
    }
  });

  return model;

}
