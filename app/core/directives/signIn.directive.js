module.exports = signIn;

signIn.$inject = ['Acl', '$state'];

function signIn(Acl, $state) {
   var directive = {
      restrict: 'A',
      scope: {},
      link: Link
   };

   function Link($scope, $elemet) {
      $elemet.bind('click', function () {

        Acl.login('user', {token:'wefwef'});
        $state.go('root.app.products');

      });
   }

   return directive;
}
