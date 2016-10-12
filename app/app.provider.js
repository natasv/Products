module.exports = AppProvider;

AppProvider.$inject = [];

function AppProvider() {
  var provider = this;

  provider.config = {};
  provider.template = template;
  provider.$get = App;

  App.$inject = [
    '$state'
  ];

  function App($state) {
    var app = {
      template: template
    };

    Object.defineProperties(app, {
      config: {
        get: function() {
          return provider.config;
        }
      }
    });

    return app;
  }

  function template(path) {
    return 'templates/' + path + '.html';
  }
}
