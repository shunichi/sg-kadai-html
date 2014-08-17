// Generated by CoffeeScript 1.7.1
(function() {
  $(document).ready(function() {
    var body, bottom, duration, isBottomVisible, isFirefox, isTopVisible, top, updateButton;
    top = $("#scroll-to-top");
    bottom = $("#scroll-to-bottom");
    duration = 500;
    isFirefox = typeof InstallTrigger !== "undefined" && InstallTrigger !== null;
    body = $(isFirefox ? "html" : "body");
    isTopVisible = true;
    isBottomVisible = true;
    top.click(function() {
      return body.animate({
        scrollTop: 0
      }, duration);
    });
    bottom.click(function() {
      return body.animate({
        scrollTop: $(document).height() - $(window).height()
      }, duration);
    });
    updateButton = function() {
      duration = "fast";
      if (isTopVisible !== (body.scrollTop() > 0)) {
        isTopVisible = !isTopVisible;
        if (isTopVisible) {
          top.fadeIn(duration);
        } else {
          top.fadeOut(duration);
        }
      }
      if (isBottomVisible !== (body.scrollTop() < $(document).height() - $(window).height())) {
        isBottomVisible = !isBottomVisible;
        if (isBottomVisible) {
          return bottom.fadeIn(duration);
        } else {
          return bottom.fadeOut(duration);
        }
      }
    };
    $(window).scroll(updateButton);
    return updateButton();
  });

}).call(this);