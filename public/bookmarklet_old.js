(function(){

  // the minimum version of jQuery we want
  var v = "1";

  // check prior inclusion and version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
    var done = false;
    var script = document.createElement("script");
    script.src = "//ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
    script.onload = script.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
        done = true;
        $.noConflict();
        initMakrBookmarklet();
      }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  } else {
    initMakrBookmarklet();
  }

  function initMakrBookmarklet() {
    (window.makrio = {

      VERSION : 0.1,
      origin : function() {
        return jQuery('#makrio-bm-script').data('origin');
      },

      endpoint : function(){
        return this.origin() + '/ingredients'
      },

      initialize : function() {
        this.showActive()
        this.initImageClicks()
      },

      deactivate : function() {
        jQuery(".makrio-bm-el").fadeOut(function(){
          window.makrio = undefined
        })
      },

      showActive : function() {
        jQuery("<div/>", {
          text : "makr.io active",
          class : "makrio-bm-el",
          style : "position:fixed; bottom:0; left:0; width: 100%; padding:10px; background-color: red; color: #fff; font-size: 20px; line-height: auto; z-index: 999;"
        }).appendTo("body")
      },

      initImageClicks : function() {
        var self = this;

        jQuery("a img, img").live("click", function(evt){
          evt.stopImmediatePropagation()
          evt.preventDefault()

          var element = jQuery(evt.target)
          if(element.is("a")) {
            element = element.find("img")
          }

          self.saveImage(element)
          return false;
        })
      },

      imageUrl : function(src) {
        var origin = src.search("//") == -1 ? document.location.origin + "/" : ""
        return origin + src;
      },

      saveImage : function(element) {
        var self = this
          , imageParams = {
          url : self.imageUrl(element.attr("src")),
          height : element.height(),
          width : element.width()
        }

        jQuery.post(self.endpoint(), imageParams)
          .done(function(){
            console.log('party all the time')
          })
      }
    });

    window.makrio.initialize();
  }
})();