var main = function() {
    $(window).scroll(function() {
        var y = $(window).scrollTop();

        //var topOfDiv = $("#slide-blog").offset().top;
        var height = $("#slide-blog").outerHeight();
        var topOfDiv = $(window).height();
        var navHeight = $("nav").outerHeight();

        if (y >= (height)) {
            if ($("nav").hasClass("navbar-static-top")) {
                $("nav").removeClass("navbar-static-top");
                $("nav").addClass("navbar-fixed-top");
                $("nav").hide().slideDown();
            //$("#slide-blog").css("margin-top", -navHeight);
            }
        } else if (y < (topOfDiv + height)) {
            if ($("nav").hasClass("navbar-fixed-top")) {
                $("nav").removeClass("navbar-fixed-top");
                $("nav").addClass("navbar-static-top");
        //    $("#slide-blog").css("margin-top", 0);
            }
        }
    });
};

$(document).ready(main());

WebFontConfig = {
    google: { families: [ 'Open+Sans:400,300,600,800,700:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
