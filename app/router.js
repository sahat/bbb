define([
  'underscore',
  'jquery',
  'backbone',
  'views/login'
], function(_, $, Backbone, LoginView) {
  // Defining the application router.
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'login': 'login',

      '*actions': 'defaultAction'
    },

    index: function() {
      console.log("Welcome to your / route.");
    },

    login: function() {
      var loginView = new LoginView();
      $('#main').append(loginView.render().el);
    },

    defaultAction: function(actions) {
      console.log('No route', actions);
    }
  });

  return AppRouter;
});
