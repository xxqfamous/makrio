//= require "../post_view"

app.views.Post.SmallFrame = app.views.Post.extend({
  className : "canvas-frame",

  templateName : "small-frame/default",  // default to fall back to

  events : {
    "click .info" : "goToPost"
  },

  subviews : {
    '.embed-frame' : "oEmbedView"
  },

  initialize : function(options) {
    this.stream = options.stream;
    this.composing = options.composing || false

    if(this.model.get("show_screenshot") && !this.composing) {
      this.templateName = "small-frame/screenshot"
      this.$el.addClass('frame-screenshot')
    } else {
      this.addStylingClasses()
    }
  },

  oEmbedView : function(){
    return new app.views.OEmbed({model : this.model})
  },

  smallFramePresenter : function(){
    //todo : we need to have something better for small frame text, probably using the headline() scenario.
    return _.extend(this.defaultPresenter(),
      {
        text : this.model && app.helpers.textFormatter(this.model.get("text"), this.model),
        likesCount : this.model.interactions.likesCount(),
        resharesCount : this.model.interactions.resharesCount(),
        commentsCount : this.model.interactions.commentsCount()
      })
  },

  postRenderTemplate : function() {
    if(!!this.model.get("show_screenshot") && !this.composing) { return; }
    this.addStylingClasses()
  },

  addStylingClasses : function() {
    this.$el.addClass([this.dimensionsClass(), this.textClasses(), this.frameClass()].join(' '))
  },

  frameClass : function(){
    var name = this.model.get("frame_name") || ""
    return name.toLowerCase()
  },

  textClasses : function() {
    var text = this.model.get("text")
      , hasText = $.trim(text).length == 0 ? "no-text" : "has-text"
      , hasMedia = hasMediaObject(this.model) ? "has-media" : ""
      , baseClass = (hasMedia.length == 0 && text.length < 40) ? "big-text" : "";

    return [baseClass, hasText, hasMedia].join(" ")

    function hasMediaObject(model){
      return (model.get("photos").length > 0 || model.get("o_embed_cache"))
    }
  },

  dimensionsClass : function() {
    return (this.model.get("favorite")) ? "x2 width" : ""
  },

  goToPost : function(evt) {
    if(evt) { evt.preventDefault() && evt.stopImmediatePropagation(); }
    app.setPreload('post',this.model.attributes)
    app.router.navigate('/p/' + this.model.id, true)
  }
});
