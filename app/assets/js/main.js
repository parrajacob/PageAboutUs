$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.goToTop').fadeIn();
        }
        else {
            $('.goToTop').fadeOut();
        }
    });
    $('.goToTop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
   
});
