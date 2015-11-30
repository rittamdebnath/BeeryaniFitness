
$(document).on("click", "a[href^=#]", function (e) {
     var
         id = $(this).attr("href"),
         $elem = $(id);
     if ($elem.length > 0) {
         e.preventDefault();
         TweenMax.to(window, 0.5, {
             scrollTo: {
                 y: $elem.offset().top,
                 force3D:true
             },
             ease: Power3.easeInOut
         });
         if (window.history && window.history.pushState) {
             // if supported by the browser we can even update the URL.
             history.pushState("", document.title, id);
         }
     }
 });
