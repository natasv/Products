module.exports = ModalService;

ModalService.$injext = ['$uibModal', 'App'];

function ModalService($uibModal, App) {
  var _this = this;

  this.signUpModal = function() {
    $uibModal.open({
      size: 'sm',
      bindToController: 'true',
      controllerAs: '$ctrl',
      controller: 'SignupCtrl',
      templateUrl: App.template('core/directives/views/signup-modal')
    });
  };
}
