// Boilerplate
define([
  'underscore',
  'jquery',
  'backbone',
  'text!templates/project/list.html'
], function(_, $, Backbone, tpl) {

  var ProjectListView = Backbone.View.extend({
    el: $('#container'),

    initialize: function() {

    },

    render: function() {
      var compiledTemplate = _.template(tpl, {});
      this.$el.html(compiledTemplate);
      return this;
    }
  });

  return ProjectListView;
});