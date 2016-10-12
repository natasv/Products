module.exports = signUp;

signUp.$inject = ['BaseModel'];

function signUp(BaseModel) {
   var directive = {
      restrict: 'A',
      scope: {},
      link: Link
   };

   function Link($scope, $elemet) {

      $elemet.bind('click', function () {

        BaseModel.register({username: "nata", password : 111111})
          .$promise.then(function(val) {
            console.log('sign up');
          });

      });
   }

   return directive;
}
