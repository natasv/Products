module.exports = {
   bindings:     {},
   controller:   HeaderController,
   controllerAs: 'vm',
   templateUrl:  ['App', function (App) {
     return App.template('layout/header/header');
   }]
};

HeaderController.$inject = ['Acl'];

function HeaderController (Acl) {
   var vm = this;
   vm.Acl = Acl;
}
