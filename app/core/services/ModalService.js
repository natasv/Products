module.exports = ModalService;

ModalService.$injext = ['$uibModal', 'App'];

function ModalService($uibModal, App) {
  var _this = this;

  var modalParams = {
    size: 'sm',
    bindToController: 'true',
    controllerAs: '$ctrl',
  };

  this.signUpModal = function() {
    var params = angular.extend(modalParams, {
      controller: 'SignupCtrl',
      templateUrl: App.template('core/directives/views/signup-modal')
    })

    $uibModal.open(params);
  };

  this.LoginModal = function() {
    var params = angular.extend(modalParams, {
      controller: 'LoginCtrl',
      templateUrl: App.template('core/directives/views/login-modal')
    })

    return $uibModal.open(params);
  };
}
