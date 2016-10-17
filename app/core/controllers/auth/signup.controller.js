module.exports = SignupCtrl;

SignupCtrl.$inject = ['BaseModel', 'toaster', '$uibModalInstance'];

function SignupCtrl(BaseModel, toaster, $uibModalInstance) {

  var _this = this;

  this.model = {};
  this.submit = submit;

  function submit(formName) {

    this.submited = true;
    if (!formName.$invalid) {
      sumbitRequest();
    }
  }

  function sumbitRequest() {
    var scsMsg = 'Your registration was successful. You may login.';
    BaseModel.register(_this.model)
      .$promise.then(function(val) {
        $uibModalInstance.close();
        toaster.pop('success', scsMsg);
      });
  }

}
