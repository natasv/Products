module.exports = AppProvider;

AppProvider.$inject = [];

function AppProvider() {
  var provider = this;

  provider.template = template;
  provider.$get = App;

  App.$inject = [
    '$state'
  ];

  function App($state) {
    var app = {
      template: template
    };

    return app;
  }

  function template(path) {
    return 'templates/' + path + '.html';
  }
}
