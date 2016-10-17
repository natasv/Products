module.exports = signUp;

signUp.$inject = ['ModalService'];

function signUp(ModalService) {
  var directive = {
    restrict: 'A',
    scope: {},
    link: Link
  };

  function Link($scope, $elemet) {
    $elemet.bind('click', function() {
      ModalService.signUpModal();
    });
  }

  return directive;
}
