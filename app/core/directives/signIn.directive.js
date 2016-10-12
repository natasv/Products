module.exports = signIn;

signIn.$inject = ['Acl', '$state', 'BaseModel'];

function signIn(Acl, $state, BaseModel) {
   var directive = {
      restrict: 'A',
      scope: {},
      link: Link
   };

   function Link($scope, $elemet) {
      $elemet.bind('click', function () {

        BaseModel.login({username: "nata", password : 111111})
          .$promise.then(function(val) {
            console.log('sign in');
            console.log(val)
            Acl.login('user', val);
            $state.go('root.app.products');

          });

      });
   }

   return directive;
}
