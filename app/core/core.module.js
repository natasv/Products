module.exports = 'core';

angular.module('core', [])
    .config(require('./config/http.config'))
      /*services*/
    .service('BaseModel',require('./models/BaseModel'))
    .service('ReviewsModel',require('./models/ReviewsModel'))
    .service('ModalService',require('./services/ModalService'))
      /*directives*/
    .directive('logout',require('./directives/logout.directive'))
    .directive('backBtn',require('./directives/backBtn.directive'))
    .directive('signIn',require('./directives/signIn.directive'))
    .directive('signUp',require('./directives/signUp.directive'))
      /*constants*/
    .constant('DEFAULT_USER',require('./constants/user.constant'))
    .constant('DEFAULT_PROFILE',require('./constants/profile.constant'))
    /*components*/
    .component('review', require('./components/review/review.component'))
    .component('productDetails', require('./components/product.details/product.details.component'))
    .component('createReview', require('./components/review/create.review.component'))
