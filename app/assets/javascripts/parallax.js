var ready;
ready = function(){
  var position = parseInt($('.intro-section').css('padding'))
  (function(){

    var parallax = document.querySelectorAll(".ground"),
        speed = -0.1;

    window.onscroll = function(){
      [].slice.call(parallax).forEach(function(el,i){

        var windowYOffset = window.pageYOffset,
            elBackgrounPos = position + "% " + (windowYOffset * speed) + "px";

        el.style.backgroundPosition = elBackgrounPos;

      });
    };

  })();
};

$(document).ready(ready);
$(document).on('page:load', ready);