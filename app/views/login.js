define([
  'underscore',
  'jquery',
  'backbone',
  'text!templates/login.html'
], function(_, $, Backbone, loginTpl) {
  var LoginView = Backbone.View.extend({

    el: '#main',

    template: _.template(loginTpl),

    events: {

    },

    initialize: function() {

    },

    render: function() {
      this.$el.html(this.template());
      return this;
    }
  });

  return LoginView;
});