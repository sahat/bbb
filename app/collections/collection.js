define([
  'underscore',
  'jquery',
  'backbone',
  'models/model'
], function(_, $, Backbone, MyModel) {
  var MyCollection = Backbone.Collection.extend({
    model: MyModel
  });

  return MyCollection;
});