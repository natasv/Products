module.exports = 'product';

angular.module('product', [])
    .config(require('./product.routes'))
    .component('product',require('./product.component'))
