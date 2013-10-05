define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");

  var Album = require('modules/tunes');

  var album = new Album.Model({
    title: 'Abbey Road',
    artist: 'The Beatles',
    tracks: [{
      title: 'Track A'
    }]
  });
  var albumView = new Album.View({model:album});

  $('#main').append(albumView.render().el);

  setTimeout(function() {
    album.set({artist:'sahat'});
  }, 3000);

  // Defining the application router.
  module.exports = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
      console.log("Welcome to your / route.");
    }
  });
});
