var ready;
ready = function(){

  (function(){

    var parallax = document.querySelectorAll(".ground"),
        speed = -0.5;

    window.onscroll = function(){
      [].slice.call(parallax).forEach(function(el,i){

        var windowYOffset = window.pageYOffset,
            elBackgrounPos = "0% " + (windowYOffset * speed) + "px";

        el.style.backgroundPosition = elBackgrounPos;

      });
    };

  })();
};

$(document).ready(ready);
$(document).on('page:load', ready);