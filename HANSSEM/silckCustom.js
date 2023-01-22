$(document).ready(function(){


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
            $($header).find('a').addClass('change')
            $($header).find('i').addClass('change')
            if(hoverClass==true){
                $(menu).removeClass('hover')
                $(menuHover).removeClass('open')
                $($header).removeClass('change')
                $($header).find('a').removeClass('change')
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


    //bestRemodeling
    $('.bestRemodeling .single-item').slick({
        dots: true,
        dotsClass: 'dots_custom',
        autoplay: true,
        autoplaySpeed: 5000,
    });
    $('.bestRemodeling .dots_custom li:nth-of-type(1)').text('20평대');
    $('.bestRemodeling .dots_custom li:nth-of-type(2)').text('30평대');
    $('.bestRemodeling .dots_custom li:nth-of-type(3)').text('40평대');
    $('.bestRemodeling .dots_custom li:nth-of-type(4)').text('50평대이상');

})