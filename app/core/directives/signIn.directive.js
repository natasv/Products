module.exports = signIn;

signIn.$inject = ['ModalService'];

function signIn(ModalService) {
  var directive = {
    restrict: 'A',
    scope: {},
    link: Link
  };

  function Link($scope, $elemet) {
    $elemet.bind('click', function() {
      ModalService.LoginModal();
    });
  }

  return directive;
}
