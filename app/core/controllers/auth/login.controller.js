module.exports = LoginCtrl;

LoginCtrl.$inject = ['BaseModel', 'toaster', '$uibModalInstance', 'Acl', '$state'];

function LoginCtrl (BaseModel, toaster, $uibModalInstance, Acl, $state) {

   var _this = this;

   this.model = {};
   this.submit = submit;

   function submit(formName){

     this.submited = true;
     if (!formName.$invalid) {
       sumbitRequest();
     }
   }

   function sumbitRequest() {
     var user = {};
     var errMsg = 'Invalid username or password';
     BaseModel.login(_this.model)
       .$promise.then(function(response) {

         if (!response.success){
            toaster.pop('success', errMsg);
            return;
         }

         user = angular.extend(_this.model, {token: response.token});
         $uibModalInstance.close();
         Acl.login('user', user);
         $state.go('root.app.products');
       });
   }
 }
