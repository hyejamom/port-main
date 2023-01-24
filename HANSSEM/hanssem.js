$(document).ready(function(){


    //visual txt animation
    let mainTxt = '.main_txt'
    $(mainTxt).addClass('show')

    //menu a click -> menu_hover open
    let menu = '.menu li'
    let menuHover = '.menu_hover'
    let menuNumber = 1;
    let menuTitle ='.menu_title'
    let $header ='header'
    let menuLi = '.menu_li'
    $(menu).on('click', function(){
        let menuThis = $(this).index(); //0,1,2,3
        let hoverClass = $(this).hasClass('hover')
        $(menuHover).addClass('open')
        if(menuThis<=3){
            $(menuLi).children('li').css({'display':'none'})
            $(menuLi).children(`li.li${menuThis}`).css({'display':'block'})
            $(menuTitle).children('p').css({'display':'none'})
            $(menuTitle).children(`p.title${menuThis}`).css({'display':'block'})
            $(menu).removeClass('hover')
            $(this).addClass('hover')
            $(menuHover).addClass('open')
            $($header).addClass('change')
            $($header).find('.menu>li').addClass('change')
            $($header).find('i').addClass('change')
            if(hoverClass==true){
                $(menu).removeClass('hover')
                $(menuHover).removeClass('open')
                $($header).removeClass('change')
                $($header).find('.menu>li').removeClass('change')
                $($header).find('i').removeClass('change')
            }
            else {}
        }

    })

    //media 1200px menu click
    let moI = '.mo_i'
    let mobileMenu ='.mobile_menu'
    let socialBox ='.social_box'
    let mobileX ='.mo_X'
    let mobileUl ='.mobile_ul'
    $(moI).on('click',()=>{
        $($header).addClass('change')
        $($header).find('.mo_i').addClass('change')
        $($header).find('i').addClass('change')
        $(mobileMenu).css({'display':'block'})
        setTimeout(function(){
            $(mobileUl).children('li:nth-of-type(1)').addClass('trans')
            $(socialBox).addClass('trans')
        },100)
        setTimeout(function(){
            $(mobileUl).children('li:nth-of-type(2)').addClass('trans')
        },200)
        setTimeout(function(){
            $(mobileUl).children('li:nth-of-type(3)').addClass('trans')
        },300)
        setTimeout(function(){
            $(mobileUl).children('li:nth-of-type(4)').addClass('trans')
        },400)

    })
    $(mobileX).on('click',()=>{
        $($header).removeClass('change')
        $($header).find('.mo_i').removeClass('change')
        $($header).find('i').removeClass('change')
        $(mobileMenu).css({'display':'none'})
        $(mobileUl).children('li').removeClass('trans')
        $(socialBox).removeClass('trans')
    })
    
    


    //menu_hover 안에있는 slide 
    $('.menu_slide .single-item').slick({
        dots: true,
        dotsClass: 'menu_dot_custom',
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.menu_slide .menu_dot_custom li').text('')


    //bestRemodeling .pc
    $('.bestRemodeling .single-item.pc').slick({
        dots: true,
        dotsClass: 'dots_custom',
        autoplay: true,
        autoplaySpeed: 5000,
    });

    //bestRemodeling .mo
    $('.bestRemodeling .single-item.mo').slick({
        // autoplay: true,
        // autoplaySpeed: 5000,
      });

    $('.bestRemodeling .dots_custom li:nth-of-type(1)').text('20평대');
    $('.bestRemodeling .dots_custom li:nth-of-type(2)').text('30평대');
    $('.bestRemodeling .dots_custom li:nth-of-type(3)').text('40평대');
    $('.bestRemodeling .dots_custom li:nth-of-type(4)').text('50평대이상');

    $('.bestRemodeling .single-item.mo .slick-prev').html('<i class="fa-solid fa-angle-left"></i>');
    $('.bestRemodeling .single-item.mo .slick-next').html('<i class="fa-solid fa-angle-right"></i>');


    //nav 올라감
    let lastScrollTop = 0;
    let delta = 15; //동작의 구현이 시작되는 위치
    $(window).on('scroll', function () {
        let scrollTop = $(this).scrollTop();
        if (scrollTop >= 100) {
            $('header').addClass('change')
            $('.menu li').addClass('change')
            $('.login_box').find('i').addClass('change')
            $('.login_box').find('.mo_i').addClass('change')
            $('.menu_hover').removeClass('open')
            if (Math.abs(lastScrollTop - scrollTop) <= delta){return;} // 스크롤 값을 받아서 ~ ~ 리턴
            if ((scrollTop > lastScrollTop) && (lastScrollTop > 0)) {
                /* 화면에 나오지 않을 때, top값은 요소가 보이지 않을 정도로 사용해야함 */
                $("nav").slideUp(300);
            } else {
                $("nav").slideDown(300);
            }
            lastScrollTop = scrollTop;
        }
        else if (scrollTop <= 100) {
            $('header').removeClass('change')
            $('.menu li').removeClass('change')
            $('.login_box').find('i').removeClass('change')
            $('.login_box').find('.mo_i').removeClass('change')
            $('.menu_hover').removeClass('open')
            $('.mobile_menu').css({'display':'none'})
        }
    })



//     let lastScrollTop = 0;
//     let delta = 15;
//     $(window).on('scroll',function(){
//         let scrollTop = $(this).scrollTop();
//         if(scrollTop >= 100){
//             if(Math.abs(scrollTop-lastScrollTop) >= delta){return;}
//             if((scrollTop>lastScrollTop)&&(lastScrollTop>0)){
//                 $('nav').slideUp(300);
//             }
//             else{
//                 $('nav').slideDown(300);
//             }
//             lastScrollTop=scrollTop
//         }
//         else if(scrollTop <= 100){}
// 
//     })











})