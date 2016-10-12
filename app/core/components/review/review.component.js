module.exports = {
   bindings:     {
     model: '<'
   },
   controller:   ReviewController,
   templateUrl:  ['App', function (App) {
     return App.template('core/components/review/review');
   }]
};

ReviewController.$inject = [];

function ReviewController () {
   console.log(this.model)
}
