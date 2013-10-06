require.config({
  paths: {
    // Make vendor easier to access.
    'vendor': '../vendor',

    // Almond is used to lighten the output filesize.
    'almond': '../vendor/bower/almond/almond',

    'text': '../vendor/bower/requirejs-text/text',

    // Opt for Lo-Dash Underscore compatibility build over Underscore.
    'underscore': '../vendor/bower/lodash/dist/lodash.underscore',

    // Map remaining vendor dependencies.
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