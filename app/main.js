require.config({
  paths: {
    // Make vendor easier to access.
    'vendor': '../vendor',

    'almond': '../vendor/bower/almond/almond',
    'text': '../vendor/bower/requirejs-text/text',
    'underscore': '../vendor/bower/lodash/dist/lodash.underscore',
    'jquery': '../vendor/bower/jquery/jquery',
    'backbone': '../vendor/bower/backbone/backbone'
  },

  shim: {
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }
});

require(['app', 'router'], function(app, Router) {
  app.router = new Router();

  Backbone.history.start({ pushState: true, root: app.root });
});