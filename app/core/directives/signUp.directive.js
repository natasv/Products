module.exports = signUp;

signUp.$inject = ['BaseModel', 'ModalService'];

function signUp(BaseModel, ModalService) {
   var directive = {
      restrict: 'A',
      scope: {},
      link: Link
   };

   function Link($scope, $elemet) {

      $elemet.bind('click', function () {

        ModalService.signUpModal();

        // BaseModel.register({username: "nata", password : 111111})
        //   .$promise.then(function(val) {
        //     console.log('sign up');
        //   });

      });
   }

   return directive;
}
