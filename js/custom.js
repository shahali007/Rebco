$(document).ready(function(){
    $(window).scroll(function(event) {
        Scroll();
    });

    $('.navbar-collapse ul li a, .navbar-header a ').on('click', function() {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 70}, 1000);
        return false;
    });
});