define([
  'underscore',
  'jquery',
  'backbone',
  'text!templates/example.html'
], function(_, $, Backbone, tpl) {
  var MyView = Backbone.View.extend({
    template: _.template(tpl),

    events: {

    },

    initialize: function() {

    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  return MyView;
});