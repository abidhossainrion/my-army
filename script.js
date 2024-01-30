$(document).ready(function() {
    var navbar = $('.navbar');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            navbar.addClass('transparent');
        } else {
            navbar.removeClass('transparent');
        }
    });
});




