module.exports = {
  bindings: {
    reviews: '=',
    productId: '<'
  },
  controller: CreateReviewController,
  templateUrl: ['App', function(App) {
    return App.template('core/components/review/create-review');
  }]
};

CreateReviewController.$inject = ['ReviewsModel', '$filter', 'Acl', 'ModalService'];

function CreateReviewController(ReviewsModel, $filter, Acl, ModalService) {

  var _this = this;

  this.review = {
    id: this.productId,
    rate: '5',
    created_by: {
      username: 'user'
    },
    created_at: new Date()
  };

  this.create = create;

  init();

  function init() {
    _this.reviews = $filter('orderBy')(_this.reviews, '-created_at');
  }

  function create() {

    if (Acl.hasRole('guest')) {
      var modal = ModalService.LoginModal();

      modal.result.then(function() {
        sendReview()
      });
    } else {
      sendReview();
    }
  }

  function sendReview() {
    var review = angular.copy(_this.review);
    createRequest(review).then(function(res) {
      _this.reviews.unshift(review);
      _this.reviews = $filter('orderBy')(_this.reviews, 'created_at');
      _this.review.text = null;
    });
  }

  function createRequest(review) {
    return ReviewsModel.postReview(review).$promise;
  }

}
