define(['app', 'text!templates/album.html'], function(app, albumTpl) {
  var Album = {};

  Album.Model = Backbone.Model.extend({

  });

  Album.View = Backbone.View.extend({
    tagName: 'li',
    className: 'album',

    initialize: function() {
      _.bindAll(this, 'render');
      this.model.bind('change', this.render);
      this.template = _.template(albumTpl);
    },

    render: function() {
      var compiledTemplate = this.template(this.model.toJSON());
      this.$el.html(compiledTemplate);
      return this;
    }
  });

  return Album;
});