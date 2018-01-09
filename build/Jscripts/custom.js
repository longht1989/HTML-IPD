/* ====================================
   Onload functions
   ==================================== */

$(function() {
    /*show mobile menu*/
    $('.fa-navicon').click(function() {
        $(this).toggleClass('is-active');
        $(".mobile__menu").slideToggle('fast');
    });
    $('.story-listing .story--rare').matchHeight();
    $('.site-cover ul').bxSlider({
        controls: 0,
        auto: 1,
        pause: 10000
    });
    // var i = 0;
    // $('img').each(function() {
    //     var imgsrc = $(this).attr('src');
    //     if imgsrc == "https://source.unsplash.com/random/203x114?sig=" {
    //         imgsrc = imgsrc + i;
    //     }
    // });
});