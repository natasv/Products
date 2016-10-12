module.exports = 'products';

angular.module('products', [])
    .config(require('./products.routes'))
    .component('products',require('./products.component'))
