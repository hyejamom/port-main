$(document).ready(function () {


    //header menu
    let menuPc = '.menu'
    let pcMenuBack = '.pc-menu-back'
    let pcMenu = '.pc-menu'
    let nav = '.nav'
    let hoverA1 = '.hoverA1.pc'
    let search = '.search'
    let moMenu = '.mo-menu'
    let hoverMenu = '.hover-menu'
    let menuNumber = 1;
    let menuImg = ['../down_img1.jpg', '../down_img2.jpg', '../down_img3.jpg', '../down_img4.jpg']
    //클릭했을때 메뉴 없어짐
    let blackBack = function () {
        $(pcMenu).stop().animate({ 'left': '-450px' }, function () {
            $('nav').css({ 'background-color': 'transparent' })
            $(menuPc).find('a').css({ 'color': '#fff' })
            $(search).find('a').css({ 'color': '#fff' })
            $(search).find('i').css({ 'color': '#fff' })
            $(pcMenuBack).css({ 'opacity': '0' })
        })
        setTimeout(function () {
            $(pcMenuBack).css({ 'display': 'none' })
        }, 300)
    }
    //클릭하면 메뉴 생김
    let menuClick = function () {
        $(pcMenuBack).css({ 'opacity': '0.7' })
        $(pcMenuBack).css({ 'display': 'block' })
        $(nav).css({ 'background-color': '#fff' })
        $(search).find('i').css({ 'color': '#333' })
        setTimeout(function () {
            $(pcMenu).stop().animate({ 'left': '0%' })
        }, 300)
    }
    // 메뉴에 호버하면 메뉴 생김
    $(menuPc).children('li').on('mouseenter', function () {
        let hoverMenuIndex = $(this).index(); //0,1,2,3
        $(pcMenuBack).css({ 'opacity': '0.7' })
        $(pcMenuBack).css({ 'display': 'block' })
        $(nav).css({ 'background-color': '#fff' })
        $(menuPc).find('a').css({ 'color': '#333' })
        $(search).find('a').css({ 'color': '#333' })
        $(search).find('i').css({ 'color': '#333' })
        setTimeout(function () {
            $(pcMenu).stop().animate({ 'left': '0%' })
        }, 300)
        if (hoverMenuIndex <= 3) {
            $(hoverA1).children('a').css({ 'display': 'none' })
            $(hoverA1).children(`a:nth-of-type(${hoverMenuIndex + 1})`).css({ 'display': 'flex' })
            $(hoverMenu).children('img').attr({ 'src': menuImg[hoverMenuIndex] })
        }
    })
    //블랙 배경 클릭하면 메뉴 없어짐
    $(pcMenuBack).on('click', function () {
        blackBack();
    })
    //탭,모바일일때 생기는 메뉴 아이콘 클릭하면 메뉴 생기고 없어짐
    $(moMenu).on('click', function () {
        if (menuNumber == 1) {
            menuClick();
            menuNumber++;
        }
        else if (menuNumber == 2) {
            blackBack();
            menuNumber--;
        }
    })


    // section0 video box 
    let video = 0;
    let roding2 = '.roading div:nth-of-type(2)'
    let moveCover = '.cover-video-wrap'
    let moveVideo = $(moveCover).children('div .video')
    let rodingP = '.roading p'
    let section0Left = '.section0-left'
    let section0Right = '.section0-right'
    let coverBox = '.cover-box'
    let videoText = ['01 참이슬', '02 진로', '03 테라', '04 필라이트']
    let videoArrow = ['참이슬', 'JINRO', 'TERA', 'FILL LIGHT']
    //section0 오른쪽이동 변수
    let section0Start = function () {
        if (video <= 1) {
            video++;
            $(roding2).removeClass('on')
            $(section0Left).children('p').text(videoArrow[video - 1])
            $(section0Right).children('p').text(videoArrow[video + 1])
            $(moveCover).stop().animate({ 'left': `${video * -100}%` }, 500, function () {
                $(rodingP).text(videoText[video])
                $(roding2).addClass('on')
            })
        }
        else if (video == 2) {
            video++;
            $(roding2).removeClass('on')
            $(section0Left).children('p').text(videoArrow[video - 1])
            $(section0Right).children('p').text(videoArrow[video - 3])
            $(moveCover).stop().animate({ 'left': '-300%' }, 500, function () {
                $(rodingP).text(videoText[video])
                $(roding2).addClass('on')
            })
        }
        else if (video == 3) {
            video = 0;
            $(roding2).removeClass('on')
            $(section0Left).children('p').text(videoArrow[video + 3])
            $(section0Right).children('p').text(videoArrow[video + 1])
            $(moveCover).stop().animate({ 'left': '0%' }, 500, function () {
                $(rodingP).text(videoText[video])
                $(roding2).addClass('on')
            })
        }
    }
    //section0 왼쪽 이동 변수
    let section0PrevStart = function () {
        if (video == 0) {
            video = 3;
            $(roding2).removeClass('on')
            $(section0Left).children('p').text(videoArrow[video - 1])
            $(section0Right).children('p').text(videoArrow[video - 3])
            $(moveCover).stop().animate({ 'left': '-300%' }, 500, function () {
                $(rodingP).text(videoText[video])
                $(roding2).addClass('on')
            })
        }
        else if (video >= 2) {
            video--;
            $(roding2).removeClass('on')
            $(section0Left).children('p').text(videoArrow[video - 1])
            $(section0Right).children('p').text(videoArrow[video + 1])
            $(moveCover).stop().animate({ 'left': `${video * -100}%` }, 500, function () {
                $(rodingP).text(videoText[video])
                $(roding2).addClass('on')
            })
        }
        else if (video >= 1) {
            video--;
            $(roding2).removeClass('on')
            $(section0Left).children('p').text(videoArrow[video + 3])
            $(section0Right).children('p').text(videoArrow[video + 1])
            $(moveCover).stop().animate({ 'left': `${video * -100}%` }, 500, function () {
                $(rodingP).text(videoText[video])
                $(roding2).addClass('on')
            })
        }
    }
    //section0 자동실행
    function Start() {
        section0Stop = setInterval(function () {
            section0Start();
        }, 15000)
    }
    //section0 자동실행 시작
    Start();
    //section0 오른쪽 버튼 누르면 실행
    $(section0Right).on('click', () => {
        clearInterval(section0Stop)
        section0Start();
        Start();
    })
    //section0 왼쪽 버튼 누르면 실행
    $(section0Left).on('click', () => {
        section0PrevStart();
    })


    //section1
    let section1 = 1;
    let time = 500; //5초단위로 움직일 것
    //section1 오른쪽 이동 변수
    let section1Set = () => {
        time--;
        if (time == 0) {
            if (section1 == 1) {
                time = 500;
                $('.brand-img').stop().animate({ 'left': '-100%' })
                $('.selec-box li').children('.selec-back').removeClass('on')
                $('.selec-box li:nth-of-type(2)').children('.selec-back').addClass('on')
                section1 = 2;
            }
            else if (section1 == 2) {
                time = 500;
                $('.brand-img').stop().animate({ 'left': '-200%' })
                $('.selec-box li').children('.selec-back').removeClass('on')
                $('.selec-box li:nth-of-type(3)').children('.selec-back').addClass('on')
                section1 = 3;
            }
            else if (section1 == 3) {
                time = 500;
                $('.brand-img').stop().animate({ 'left': '0%' })
                $('.selec-box li').children('.selec-back').removeClass('on')
                $('.selec-box li:nth-of-type(1)').children('.selec-back').addClass('on')
                section1 = 1;
            }
        }
    }
    //section1 오른쪽 자동 이동
    sectionone = setInterval(section1Set, 10)
    //setion1의 이미지에 마우스를 올려놓으면 모든 행동 멈춤
    $('.brand-img li').on('mouseover', function () {
        clearInterval(sectionone)
        $('.selec-box li').children('.selec-back.on').css({ 'animation-play-state': 'paused' })
    })
    //setion1의 이미지에 마우스를 떼면 모든 행동 다시 시작
    $('.brand-img li').on('mouseleave', function () {
        sectionone = setInterval(section1Set, 10)
        $('.selec-box li').children('.selec-back.on').css({ 'width': '0px', 'animation-play-state': 'running' })
    })


    // section1 클릭했을때 슬라이드
    $('.selec-box li:nth-of-type(1)').on('click', function () {
        let have = $(this).children('.selec-back').hasClass('on')
        if (have == true && section1 == 2) { }
        else {
            $('.selec-box li').children('.selec-back').removeClass('on')
            $(this).children('.selec-back').addClass('on')
            clearInterval(sectionone);
            time = 500;
            $('.brand-img').stop().animate({ 'left': '0%' })
            section1 = 1;
        }
        sectionone = setInterval(section1Set, 10)
    })
    $('.selec-box li:nth-of-type(2)').on('click', function () {
        let have = $(this).children('.selec-back').hasClass('on')
        if (have == true && section1 == 3) { }
        else {
            $('.selec-box li').children('.selec-back').removeClass('on')
            $(this).children('.selec-back').addClass('on')
            clearInterval(sectionone);
            time = 500;
            $('.brand-img').stop().animate({ 'left': '-100%' })
            section1 = 2;
        }
        sectionone = setInterval(section1Set, 10)
    })
    $('.selec-box li:nth-of-type(3)').on('click', function () {
        let have = $(this).children('.selec-back').hasClass('on')
        if (have == true && section1 == 1) { }
        else {
            $('.selec-box li').children('.selec-back').removeClass('on')
            $(this).children('.selec-back').addClass('on')
            clearInterval(sectionone);
            time = 500;
            $('.brand-img').stop().animate({ 'left': '-200%' })
            section1 = 3;
        }
        sectionone = setInterval(section1Set, 10)
    })


    // section2 이미지 변환 
    let section2 = 0;
    let section2Left = '.section2-left-img-box'
    let section2Wrap = '.section2-img-wrap'
    let section2Roding = '.section2-roading'
    let section2H3 = '.section2-left>h3'
    let section2TextBox = '.section2-text-box'
    let section2P1 = ['지속가능환경경영', 'CSR', '경영철학']
    let section2P2 = ['백년대계를 책임지는 ', '하이트진로㈜의 사회공헌 활동은 ', '세계 모든 이들과 늘 함께하며,']
    let section2P3 = ['지속 가능한 환경경영을 최우선으로 실천하겠습니다.', '모두가 즐겁고 행복한 세상을 만들기 위한 실천입니다.', '삶의 즐거움과 희망을 나누겠습니다.']
    //section2 이동하는 변수
    let section2Function =
        function () {
            if (section2 <= 1) {
                section2++
                $(section2Left).addClass('on')
                $(section2Wrap).addClass('on')
                $(section2Roding).children('div:nth-of-type(2)').removeClass('on')
                $(`.section2-roading:nth-of-type(${section2 + 1})`).children('div:nth-of-type(2)').addClass('on')
                $(section2H3).delay(1000).text(section2P1[section2 - 1])
                $(section2TextBox).children('p:nth-of-type(1)').delay(1000).text(section2P1[section2 - 1])
                $(section2TextBox).children('p:nth-of-type(2)').delay(1000).text(section2P2[section2 - 1])
                $(section2TextBox).children('p:nth-of-type(3)').delay(1000).text(section2P3[section2 - 1])
                setTimeout(() => {
                    $(section2Left).removeClass('on');
                    $(section2Left).children('img:nth-of-type(1)').attr({ 'src': `./img/section2-left-img${section2}.jpg` })
                    $(section2Left).children('img:nth-of-type(2)').attr({ 'src': `./img/section2-left-img${section2 + 1}.jpg` })
                    $(section2Wrap).removeClass('on')
                    $(section2Wrap).children('img:nth-of-type(1)').attr({ 'src': `./img/section2-right-img${section2}.jpg` })
                    $(section2Wrap).children('img:nth-of-type(2)').attr({ 'src': `./img/section2-right-img${section2 + 1}.jpg` })

                }, 1000);
            }
            else if (section2 == 2) {
                section2 = 0;
                $(section2Left).addClass('on')
                $(section2Wrap).addClass('on')
                $(section2Roding).children('div:nth-of-type(2)').removeClass('on')
                $('.section2-roading:nth-of-type(1)').children('div:nth-of-type(2)').addClass('on')
                $(section2H3).delay(1000).text(section2P1[2])
                $(section2TextBox).children('p:nth-of-type(1)').delay(1000).text(section2P1[2])
                $(section2TextBox).children('p:nth-of-type(2)').delay(1000).text(section2P2[2])
                $(section2TextBox).children('p:nth-of-type(3)').delay(1000).text(section2P3[2])
                setTimeout(() => {
                    $(section2Left).removeClass('on');
                    $(section2Left).children('img:nth-of-type(1)').attr({ 'src': './img/section2-left-img3.jpg' })
                    $(section2Left).children('img:nth-of-type(2)').attr({ 'src': './img/section2-left-img1.jpg' })
                    $(section2Wrap).removeClass('on')
                    $(section2Wrap).children('img:nth-of-type(1)').attr({ 'src': './img/section2-right-img3.jpg' })
                    $(section2Wrap).children('img:nth-of-type(2)').attr({ 'src': './img/section2-right-img1.jpg' })
                }, 1000);
            }
        }
    //section2 자동이동
    section2Start = setInterval(section2Function, 5000)
    //section2 클릭했을때 이미지+내용 바뀜
    $('.section2-roading').on('click', function () {
        let section2Button = $(this).children('div:nth-of-type(2)').hasClass('on')
        let sectio2give = $(this).children('div:nth-of-type(2)')
        let allSectio2give = $('.section2-roading').children('div:nth-of-type(2)')
        let section2Index = $(this).index(); //0,1,2
        if (section2Button == true) { }
        else {
            allSectio2give.removeClass('on');
            sectio2give.addClass('on');
            clearInterval(section2Start)
            if (section2Index == 0) {
                $(section2Left).addClass('on')
                $(section2Wrap).addClass('on')
                $(section2Roding).children('div:nth-of-type(2)').removeClass('on')
                $('.section2-roading:nth-of-type(1)').children('div:nth-of-type(2)').addClass('on')
                $(section2H3).delay(1000).text(section2P1[section2Index + 2])
                $(section2TextBox).children('p:nth-of-type(1)').delay(1000).text(section2P1[section2Index + 2])
                $(section2TextBox).children('p:nth-of-type(2)').delay(1000).text(section2P2[section2Index + 2])
                $(section2TextBox).children('p:nth-of-type(3)').delay(1000).text(section2P3[section2Index + 2])
                $(section2Left).children('img:nth-of-type(2)').attr({ 'src': `./img/section2-left-img${section2Index + 3}.jpg` })
                $(section2Wrap).children('img:nth-of-type(2)').attr({ 'src': `./img/section2-right-img${section2Index + 3}.jpg` })
                setTimeout(() => {
                    $(section2Left).removeClass('on');
                    $(section2Left).children('img:nth-of-type(1)').attr({ 'src': `./img/section2-left-img${section2Index + 3}.jpg` })
                    $(section2Left).children('img:nth-of-type(2)').attr({ 'src': `./img/section2-left-img${section2Index + 1}.jpg` })
                    $(section2Wrap).removeClass('on')
                    $(section2Wrap).children('img:nth-of-type(1)').attr({ 'src': `./img/section2-right-img${section2Index + 3}.jpg` })
                    $(section2Wrap).children('img:nth-of-type(2)').attr({ 'src': `./img/section2-right-img${section2Index + 1}.jpg` })

                }, 1000);
                section2 = 0;
                section2Start = setInterval(section2Function, 5000)
            }
            else if (section2Index <= 2) {
                $(section2Left).addClass('on')
                $(section2Wrap).addClass('on')
                $(section2Roding).children('div:nth-of-type(2)').removeClass('on')
                $('.section2-roading:nth-of-type(2)').children('div:nth-of-type(2)').addClass('on')
                $(section2H3).delay(1000).text(section2P1[section2Index - 1])
                $(section2TextBox).children('p:nth-of-type(1)').delay(1000).text(section2P1[section2Index - 1])
                $(section2TextBox).children('p:nth-of-type(2)').delay(1000).text(section2P2[section2Index - 1])
                $(section2TextBox).children('p:nth-of-type(3)').delay(1000).text(section2P3[section2Index - 1])
                $(section2Left).children('img:nth-of-type(2)').attr({ 'src': `./img/section2-left-img${section2Index}.jpg` })
                $(section2Wrap).children('img:nth-of-type(2)').attr({ 'src': `./img/section2-right-img${section2Index}.jpg` })
                setTimeout(() => {
                    $(section2Left).removeClass('on');
                    $(section2Left).children('img:nth-of-type(1)').attr({ 'src': `./img/section2-left-img${section2Index}.jpg` })
                    $(section2Left).children('img:nth-of-type(2)').attr({ 'src': `./img/section2-left-img${section2Index + 1}.jpg` })
                    $(section2Wrap).removeClass('on')
                    $(section2Wrap).children('img:nth-of-type(1)').attr({ 'src': `./img/section2-right-img${section2Index}.jpg` })
                    $(section2Wrap).children('img:nth-of-type(2)').attr({ 'src': `./img/section2-right-img${section2Index + 1}.jpg` })
                }, 1000);
                section2 = section2Index;
                section2Start = setInterval(section2Function, 5000)
            }
        }
    })

    // section4 슬라이드 
    // 오른쪽 버튼 눌렀을때 
    let section4 = 1;
    $('.button:nth-of-type(2)').children('i').on('click', function () {
        $('.section4-social-box').stop().animate({ 'left': '-41.3%' }, 800, 'linear')
        $('.section4-social-box li:nth-of-type(4)>p').fadeOut();
        $('.section4-social-box li:nth-of-type(5)>p').fadeIn();
        $('.section4-social-box li:nth-of-type(4)>.phone-text').css({ 'display': 'none' });
        $('.section4-social-box li:nth-of-type(4)').stop().animate({ 'margin': '0px' }, 800, 'linear')
        $('.section4-social-box li:nth-of-type(5)').stop().animate({ 'margin': '0px 5%' }, 800, 'linear', function () {
            $('.section4-social-box').css({ 'left': '-22.5%' })
            $('.section4-social-box li:nth-of-type(1)').appendTo('.section4-social-box')
            $('.section4-social-box li:nth-of-type(4)>.phone-text').css({ 'display': 'block' })
        })
    })
    // 왼쪽버튼눌렀을때
    $('.button:nth-of-type(1)').children('i').on('click', function () {
        $('.section4-social-box').removeClass('on')
        $('.section4-social-box li:nth-of-type(7)').prependTo('.section4-social-box')
        $('.section4-social-box li:nth-of-type(5)>p').fadeOut();
        $('.section4-social-box li:nth-of-type(4)>p').fadeIn();
        $('.section4-social-box li:nth-of-type(5)>.phone-text').css({ 'display': 'none' });
        $('.section4-social-box').css({ 'left': '-41.3%' })
        $('.section4-social-box').stop().animate({ 'left': '-22.5%' }, 800, 'linear', function () {
            $('.section4-social-box li:nth-of-type(4)>.phone-text').css({ 'display': 'block' })
        })
        $('.section4-social-box li:nth-of-type(4)').stop().animate({ 'margin': '0px 5%' }, 800, 'linear')
        $('.section4-social-box li:nth-of-type(5)').stop().animate({ 'margin': '0px' }, 800, 'linear')
    })


    // section5 factory
    let section5 = 1;
    let section5Road = '.section5-road'
    let section5Slide = '.section5-slide'
    let drinkWrap2 = '.drink-wrap.on'
    let section5H3 = '.section5-content h3'
    let section5P = '.section5-content p'
    let section5Right = '.section5-right'
    let section5Left = '.section5-left'
    let section5Title = ['맥주공장(전주)', '소주공장(강원)']
    let section5Text = ['최첨단 컴퓨터의 전자동 생산시스템을 자랑하는 최신 설비의 공장', '첨단 설비와 완전 자동화 System을 갖춘 환경 친화형 공장']
    //section5 소주 영상
    let section5One = function () {
        $(section5Road).removeClass('on')
        $(section5Slide).children('div:nth-of-type(2)').children(section5Road).addClass('on')
        $(drinkWrap2).fadeIn();
        $(section5H3).text(section5Title[0])
        $(section5P).text(section5Text[0])
        section5 = 2;
    }
    //section5 맥주영상
    let section5Two = function () {
        $(section5Road).removeClass('on')
        $(section5Slide).children('div:nth-of-type(1)').children(section5Road).addClass('on');
        $(drinkWrap2).fadeOut();
        $(section5H3).text(section5Title[1])
        $(section5P).text(section5Text[1])
        section5 = 1;
    }
    //section5 영상 자동 바뀜
    function section5Start() {
        section5Stop = setInterval(function () {
            if (section5 == 1) {
                section5One();
            }
            else if (section5 == 2) {
                section5Two();
            }
        }, 10000)
    }
    //영상 자동 바뀜 시작
    section5Start();
    // section5-road on
    $(section5Slide).children('div').on('click', function () {
        let section5Index = $(this).index(); //0,1
        if (section5Index == 0) {
            let section5 = 2;
            section5Two();
        }
        else {
            let section5 = 1;
            section5One();
        }
    })
    //section5 오른쪽 화살표 누르면
    $(section5Right).on('click', () => {
        if (section5 == 2) { }
        else if (section5 == 1) {
            clearInterval(section5Stop)
            section5One();
            section5Start();
        }
    })
    // section5 왼쪽 화살표 누르면
    $(section5Left).on('click', () => {
        if (section5 == 1) { }
        else if (section5 == 2) {
            clearInterval(section5Stop)
            section5Two();
            section5Start();
        }
    })


    //네브바 올라가기
    let lastScrollTop = 0;
    let delta = 15; //동작의 구현이 시작되는 위치
    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop >= 100) {
            $(".nav").addClass('on')
            if (Math.abs(lastScrollTop - scrollTop) <= delta) // 스크롤 값을 받아서 ~
                return; // ~ 리턴
            if ((scrollTop > lastScrollTop) && (lastScrollTop > 0)) {
                /* 화면에 나오지 않을 때, top값은 요소가 보이지 않을 정도로 사용해야함 */
                $(".nav").slideUp(300);
            } else {
                $(".nav").slideDown(300);
            }
            lastScrollTop = scrollTop;
        }
        else if (scrollTop <= 100) {
            $(".nav").removeClass('on')
        }
    })


})