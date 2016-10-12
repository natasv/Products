module.exports = {
   bindings:     {},
   controller:   FooterController,
   controllerAs: 'vm',
   templateUrl:  ['App', function (App) {
     return App.template('layout/footer/footer');
   }]
};

FooterController.$inject = [];

function FooterController () {
   var vm = this;

   console.log('footer component')
}
