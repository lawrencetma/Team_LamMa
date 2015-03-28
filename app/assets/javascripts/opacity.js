 $(document).ready(function() {
      if (screen.width > 781) {
            $(window).scroll(function () {
                  var height = $('body').height();
                  var scrollTop = $('body').scrollTop();
                  var opacity = 0;
                  opacity = (scrollTop/800)
                  $('.intro-section').css('opacity', opacity);
            });
      } else if(screen.width > 480) {
            $(window).scroll(function () {
                  var height = $('body').height();
                  var scrollTop = $('body').scrollTop();
                  var opacity = 0;
                  opacity = (scrollTop/600)
                  $('.intro-section').css('opacity', opacity);
            });
      } else {
            $(window).scroll(function () {
                  var height = $('body').height();
                  var scrollTop = $('body').scrollTop();
                  var opacity = 0;
                  opacity = (scrollTop/400)
                  $('.intro-section').css('opacity', opacity);
            });
      }
  });