/**
 * Created by harry on 10/05/2017.
 */
$(document).ready(function () {
    // scroll the window to show or hide the scroll buttons
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.scroll-to-top').fadeIn(100);
        } else {
            $('.scroll-to-top').fadeOut(100);
        }
        if ($(this).scrollTop() > $(document).height() - $(this).height() - 150) { // document height - window height - 150px
            $('.scroll-to-bottom').fadeOut(100);
        } else {
            $('.scroll-to-bottom').fadeIn(100);
        }
    });

    // Scroll buttons are invoked by clicking
    $('.scroll-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 400);
    });
    $('.scroll-to-bottom').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 400);
    });
});
