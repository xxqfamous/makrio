app.views.Header = app.views.Base.extend({
  templateName : "header",
  id: "header",

  events : {
    "click #composer-button" : 'showModalFramer'
  },

  postRenderTemplate : function() {
      this.$('.nav-main li').tooltip({placement: 'right', delay: { show: 300, hide: 100 }});
    },

  presenter : function(){
    return _.extend(this.defaultPresenter(), {
      onLatest : function() { return document.location.pathname.search("stream") !== -1},
      onPopular : function() { return document.location.pathname.search("popular") !== -1 },
      onStaffPicks: function() { return document.location.pathname.search("staff") !== -1 },
      onTimeWarp: function() { return document.location.pathname.search("timewarp") !== -1 },
      onTopics: function() { return document.location.pathname.search("top_tags") !== -1 },
      onFrontPage: function() { return document.location.pathname.search("front_page") !== -1 }
    })
  }
});
