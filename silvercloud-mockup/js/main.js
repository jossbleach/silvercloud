$(function() {
    //caches a jQuery object containing the header element
    var navLogo = $(".navigation-logo");
    var navSize = $(".navigation");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            navSize.removeClass('largeNav').addClass("smallNav");
            navLogo.removeClass('large').addClass("small");
            console.log('small');
        } else {
            navSize.removeClass("smallNav").addClass("largeNav");
            navLogo.removeClass("small").addClass('large');
            console.log('large');
        }
    });
});
