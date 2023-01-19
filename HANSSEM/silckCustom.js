$(document).ready(function(){

    //bestRemodeling
    $('.single-item').slick({
        dots: true,
        dotsClass: 'dots_custom'
    });
    $('.dots_custom li').css({'color':'#adadad'});
    $('.dots_custom li:nth-of-type(1)').text('20평대');
    $('.dots_custom li:nth-of-type(2)').text('30평대');
    $('.dots_custom li:nth-of-type(3)').text('40평대');
    $('.dots_custom li:nth-of-type(4)').text('50평대이상');
    let slickTrack = '.slick-track'
    let $slickTrack1 = $(slickTrack).css({'transform':'translate3d(-1200px, 0px, 0px)'})

})