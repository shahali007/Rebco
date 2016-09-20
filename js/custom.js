$(document).ready(function(){
    $('body').scrollspy({ target: '#phy' });
    $(window).scroll(function(event) {
        Scroll();
    });

    $('.navbar-collapse ul li a, .navbar-header a ').on('click', function() {
        $('html, body').animate({scrollTop: $(this.hash).offset().top -0}, 1000);
        return false;
    });

    /* ========== Background image height equal to the browser height.==========*/


    if ($(window).width() > 1370){

        $('.ws_images, .about, .gallery, .contact').css({ 'height': $(window).height() });
        $(window).on('resize', function() {
            $('.ws_images, .about, .gallery, .contact').css({ 'height': $(window).height() });
        });
    }

    /*=========== scrollspy ===============*/


});



