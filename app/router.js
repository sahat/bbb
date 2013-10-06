define(['backbone'], function(Backbone) {
  // Defining the application router.
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index',

      '*actions': 'defaultAction'
    },

    index: function() {
      console.log("Welcome to your / route.");
    },

    defaultAction: function(actions) {
      console.log('No route', actions);
    }
  });

  return AppRouter;
});
