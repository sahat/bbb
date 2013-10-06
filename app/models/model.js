define(['underscore', 'jquery', 'backbone'], function(_, $, Backbone) {
  var MyModel = Backbone.Model.extend({
    defaults: {
      name: "Harry Potter"
    }
  });

  return MyModel;
});