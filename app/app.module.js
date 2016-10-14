angular.module('App', [
   "ui.router",
   "ui.bootstrap",
   "satellizer",
   "toaster",
   "ngResource",
   "ngMaterial",
   "ngAnimate",
   "ngAria",
   "acl",
   "ngLodash",
   "ngScrollbars",
   "anim-in-out",

   require('./core/core.module'),
   require('./layout/layout.module'),
   require('./products/products.module'),
   require('./auth/auth.module'),
   require('./product/product.module')
])
.provider('App', require('./app.provider'))
.config  (require('./app.config'))
.run  (require('./app.run'))
.config  (require('./app.routes'));

angular.element(document).ready(function () {
   angular.bootstrap(this, ['App']);
});
