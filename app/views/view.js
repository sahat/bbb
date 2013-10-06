define([
  'underscore',
  'jquery',
  'backbone',
  'text!templates/example.html',
  'collections/collection'
], function(_, $, Backbone, tpl, MyCollection) {
  var MyView = Backbone.View.extend({
    template: _.template(tpl),

    events: {

    },

    initialize: function() {
      this.collection = new MyCollection();
    },

    render: function() {
      this.$el.html(this.template(this.collection.toJSON()));
      return this;
    }
  });

  return MyView;
});