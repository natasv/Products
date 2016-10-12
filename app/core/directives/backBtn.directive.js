module.exports = backBtn;

backBtn.$inject = ['$window'];

function backBtn($window) {
   var directive = {
      restrict: 'A',
      scope: {},
      link: Link
   };

   function Link($scope, $elemet) {
      $elemet.bind('click', function () {
        $window.history.back();
      });
   }

   return directive;
}
