$(document).ready(function () {


    // wheel 속성 없애기
    window.addEventListener('wheel', function (e) {
        e.preventDefault();
    }, { passive: false })


    // wheel 변수
    let $html = $('html')
    let page = 1;
    let lastPage = $('section').length; // 4
    $html.stop().animate({ scrollTop: 0 })
    let sectionContent = ['.section1-content', '.section2-content', '.section3-content', '.section4-content']
    let sectionCompany = ['.section1-company', '.section2-company', '.section3-company', '.section4-company']
    let sectionText = ['.section1-text', '.section2-text', '.section3-text', '.section4-text']
    let sectionContentBox = ['.section1-content-box', '.section2-content-box', '.section3-content-box', '.section4-content-box']
    let sectionMediaContent = ['.section1-media-content', '.section2-media-content', '.section3-media-content', '.section4-media-content']
    let scrollBarLi = '.side-scroll-bar li'
    let sideScrollText = 'side-scroll-text'
    let actionPosition = 'action-position'
    let actionUp = 'action-up'
    let actionMiddle = 'action-middle'
    let actionDown = 'action-down'

    //1 page move
    $(window).on('wheel', function (e) {
        if ($html.is(':animated')) { return; }
        if (e.originalEvent.deltaY > 0) {
            $(scrollBarLi).removeClass(sideScrollText)
            $(scrollBarLi).eq(page).addClass(sideScrollText)//여기까지 옆에 스크롤 관련
            if (page == lastPage + 1) {
                $(scrollBarLi).removeClass(sideScrollText)////여기까지 옆에 스크롤 관련
                return
            }
            page++
        }
        else if (e.originalEvent.deltaY < 0) {
            $(scrollBarLi).removeClass(sideScrollText)
            $(scrollBarLi).eq(page - 2).addClass(sideScrollText)//여기까지 옆에 스크롤 관련
            if (page == 1) {
                $(scrollBarLi).removeClass(sideScrollText)
                $(scrollBarLi).eq(0).addClass(sideScrollText)//여기까지 옆에 스크롤 관련
                return;
            }
            page--
        }
        let st = (page - 1) * $(window).height();
        $html.stop().animate({ scrollTop: st })
        if (page<=4) {
            $('.all-content').removeClass(actionPosition)
            $(sectionContent[page-1]).addClass(actionPosition)
            $('.all-company').removeClass(actionUp)
            $(sectionCompany[page-1]).addClass(actionUp)
            $('.all-text').removeClass(actionMiddle)
            $(sectionText[page-1]).addClass(actionMiddle)
            $('.content-box').removeClass(actionDown)
            $(sectionContentBox[page-1]).addClass(actionDown)
            $('.media-content-box').removeClass(actionDown)
            $(sectionMediaContent[page-1]).addClass(actionDown)
        }
    })


    //전체 화면 메뉴에 호버하면
    $('.menu-box').on('mouseenter', function () {
        $(this).children('ul').stop().css({ 'display': 'block' });
    })
    $('.menu-box').on('mouseleave', function () {
        $(this).children('ul').stop().css({ 'display': 'none' });
    })


    //search-box 누르면
    let searchBox = '.serch-box'
    let searchNav = '.search-nav'
    let searchX = '.saerch-input'

    $(searchBox).on('click',function(){
        $(searchNav).animate({'top':'0px'})
    })
    $(searchX).on('click',function(){
        $(searchNav).animate({'top':'-200px'})
    })


    // @media 1200 side menu 
    $('.side-menu-content div').on('click', function () {
        let $this = $(this).hasClass('on')
        if ($this == true) {
            $(this).next().slideToggle(500, 'linear');
            $('.side-menu-content div').removeClass('on');
            $(this).addClass('on')
            $(this).children('p').css({ 'color': '#890302' })
        }
        else {
            $('.side-li').slideUp(500, 'linear');
            $(this).next().slideDown(500, 'linear');
            $('.side-menu-content div').removeClass('on');
            $(this).addClass('on')
            $('.side-menu-content-box p').css({ 'color': '#333' })
            $(this).children('p').css({ 'color': '#890302' })
        }
    })


    // @media 1200 menu click
    $('.menu').on('click', function () {
        $('.side-menu').css({ 'display': 'block' })
        $('.side-menu-back').addClass('on')
        $('.side-menu-content-box').addClass('on')
    })


    // @media 1200 x click
    $('.side-menu-content-box>div>i').on('click', function () {
        $('.side-menu-back').removeClass('on')
        $('.side-menu-content-box').animate({ 'translate': '100%' }, 1000, function () {
            $('.side-menu').css({ 'display': 'none' })
            $('.side-menu-content-box').css({ 'translate': '0%' })
            $('.side-menu-content-box').removeClass('on')
        })
    })


    // @media 1200 side-menu-back click
    $('.side-menu-back').on('click', function () {
        $('.side-menu-back').removeClass('on')
        $('.side-menu-content-box').animate({ 'translate': '100%' }, 1000, function () {
            $('.side-menu').css({ 'display': 'none' })
            $('.side-menu-content-box').css({ 'translate': '0%' })
            $('.side-menu-content-box').removeClass('on')
        })
    })


    // 전체화면 side-bar
    $('.side-scroll-bar li').on('click', function () {
        let number = $(this).index(); //0,1,2,3
        let sideST = (number) * $(window).height();
        $('.side-scroll-bar li').removeClass('side-scroll-text')
        $(this).addClass('side-scroll-text')
        if (number <= 3) {
            $html.stop().animate({ scrollTop: sideST })
            page = number + 1
        }

        if (page == 1) {
            $('.section1-content').addClass('action-position')
            $('.company').removeClass('action-up')
            $('.text').removeClass('action-middle')
            $('.content-box').removeClass('action-down')
        }
        else if (page == 2) {
            $('.section1-content').removeClass('action-position')
            $('.section2-company').addClass('action-up')
            $('.section3-company').removeClass('action-up')
            $('.section4-company').removeClass('action-up')
            $('.section2-text').addClass('action-middle')
            $('.section3-text').removeClass('action-middle')
            $('.section2-content-box').addClass('action-down')
            $('.section3-content-box').removeClass('action-down')
            $('.section4-content-box').removeClass('action-down')
            $('.section4-media-content').removeClass('action-down')
        }
        else if (page == 3) {
            $('.section1-content').removeClass('action-position')
            $('.section2-company').removeClass('action-up')
            $('.section3-company').addClass('action-up')
            $('.section4-company').removeClass('action-up')
            $('.section2-text').removeClass('action-middle')
            $('.section3-text').addClass('action-middle')
            $('.section2-content-box').removeClass('action-down')
            $('.section3-content-box').addClass('action-down')
            $('.section4-content-box').removeClass('action-down')
            $('.section4-media-content').removeClass('action-down')
        }
        else if (page == 4) {
            $('.section1-content').removeClass('action-position')
            $('.section2-company').removeClass('action-up')
            $('.section3-company').removeClass('action-up')
            $('.section4-company').addClass('action-up')
            $('.section2-text').removeClass('action-middle')
            $('.section3-text').removeClass('action-middle')
            $('.section2-content-box').removeClass('action-down')
            $('.section3-content-box').removeClass('action-down')
            $('.section4-content-box').addClass('action-down')
            $('.section4-media-content').addClass('action-down')
        }
    })


    // main scroll button
    $('.section1-scroll-arrow i').on('click', function () {
        let mainST = $(window).height();
        $html.stop().animate({ scrollTop: mainST })
        page = 2;
        $('.side-scroll-bar li').removeClass('side-scroll-text')
        $('.side-scroll-bar li').eq(page - 1).addClass('side-scroll-text')
    })


    //automatic slide
    let i = 1;
    function strat() {
        stop = setInterval(function () {
            //이미지 옆으로 움직이면 첫번째 사진이 제일 마지막으로 감
            if (i == 1) {
                $('.slide-img-box').animate({ 'left': (-100 / 3) + '%' })
                i++
            }
            else if (i == 2) {
                $('.slide-img-box').animate({ 'left': (-100 / 3) * 2 + '%' })
                i++
            }
            else if (i == 3) {
                $('.slide-img-box').animate({ 'left': (-100 / 3) * 3 + '%' }, function () {
                    $('.slide-img-box').css({ 'left': '0%' })
                })
                i = 1;
            }
        }, 5000)
    }


    //automatic start
    strat();


    // slide left button click
    $('.left-btn').on('click', function prev() {
        clearInterval(stop)
        if (i == 3) {
            $('.slide-img-box').animate({ 'left': (-100 / 3) * 1 + '%' })
            i--
        }
        else if (i == 2) {
            $('.slide-img-box').animate({ 'left': (-100 / 3) * 0 + '%' })
            i--
        }
        else if (i == 1) {
            $('.slide-img-box').css({ 'left': '-100%' })
            $('.slide-img-box').animate({ 'left': (-100 / 3) * 2 + '%' })
            i = 3;
        }
        strat();
    })

    
    // slide right button click
    $('.right-btn').on('click', function next() {
        clearInterval(stop)
        if (i == 1) {
            $('.slide-img-box').animate({ 'left': (-100 / 3) + '%' })
            i++
        }
        else if (i == 2) {
            $('.slide-img-box').animate({ 'left': (-100 / 3) * 2 + '%' })
            i++
        }
        else if (i == 3) {
            $('.slide-img-box').animate({ 'left': (-100 / 3) * 3 + '%' }, function () {
                $('.slide-img-box').css({ 'left': '0%' })
            })
            i = 1;
        }
        strat();
    })







})