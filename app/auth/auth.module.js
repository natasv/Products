module.exports = 'auth';

angular.module('auth', [])
  .config(require('./auth.routes'))
  .component('login', require('./login/login.component'))
