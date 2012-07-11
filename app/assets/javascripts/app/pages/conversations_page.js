//=require ./generic_canvas_page

app.pages.Conversations = app.pages.GenericCanvas.extend({
  templateName : "conversations-page",

  subviews : {
    "#canvas" : "canvasView",
    "header" : "headerView",
    '#root-frame' : 'rootFrame'
  },

  initialize : function(){
    this.model = new app.models.Conversation(app.parsePreload("conversation"))
    this.stream = new app.models.Stream([], { collectionOptions: {} })
    this.stream.preloadOrFetch()
    this.initSubviews()
  },

  rootFrame : function(){
    return new app.views.Post.CanvasFrame({
      model : this.model.original,
      className : "canvas-frame x2",
      composing : true
    })
  }
});