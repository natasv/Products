module.exports = {
   bindings:     {},
   controller:   LoginController,
   controllerAs: 'vm',
   templateUrl:  ['App', function (App) {
     return App.template('auth/login/login');
   }]
};

LoginController.$inject = ['$state', 'App'];

function LoginController ($state, App) {
   var vm = this;

   vm.credentials = {
      email : 'test@gmail.com',
      password : 'pass'
   };

   vm.login = login;

   function login() {
     
   }
}
