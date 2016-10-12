module.exports = logout;

logout.$inject = ['$state', 'Acl'];

function logout($state, Acl) {
   var directive = {
      restrict: 'A',
      scope: {},
      link: Link
   };

   function Link($scope, $elemet) {
      $elemet.bind('click', function () {

        Acl.logout();
        $state.go($state.current.name, {});

      });
   }

   return directive;
}
