module.exports = ModalService;

ModalService.$injext = ['$uibModal', 'App'];

function ModalService($uibModal, App) {
  var _this = this;

  this.signUpModal = function() {
    $uibModal.open({
      size: 'sm',
      templateUrl: App.template('core/directives/views/login-modal')
    });
  };
}
