module.exports = signUp;

signUp.$inject = [];

function signUp() {
   var directive = {
      restrict: 'A',
      scope: {},
      link: Link
   };

   function Link($scope, $elemet) {

      $elemet.bind('click', function () {
        console.log('sign up')

      });
   }

   return directive;
}
