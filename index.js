$(document).ready(function () {


    //윈도우 사이즈가 변경될때 footerHight 높이 자동 변경
    $(window).on('resize', () => {
        let footerHeight = $('footer').innerHeight();
    })

    //header 네비게이션버튼
    let upBtn = '.up-btn' //위쪽버튼
    let downBtn = '.down-btn' //아래쪽버튼
    let header = '#header' //헤더
    let nav = '#nav' //네부
    let headerHeight = document.querySelector('#header').offsetHeight; //헤더높이

    //nav 아래쪽 버튼 클릭
    $(downBtn).on('click', function () {
        $(this).css({ 'display': 'none' })
        $(upBtn).css({ 'display': 'block' })
        $(header).animate({ 'top': '0px' })
        $(nav).removeClass('on')
    })
    // nav 위쪽 버튼 클릭
    $(upBtn).on('click', function () {
        $(this).css({ 'display': 'none' })
        $(downBtn).css({ 'display': 'block' })
        $(header).animate({ 'top': '-100px' })
        $(nav).addClass('on')
    })

    //구간별 height
    let visualHeight = $('#visual').outerHeight()
    let section1Height = $('#introduce-wrap').outerHeight();
    let section2Height = $('#skills-wrap').outerHeight();
    let section3Height = $('#portfolio-wrap').outerHeight();
    let section4Height = $('#popup-wrap').outerHeight();
    let section5Height = $('#banner-wrap').outerHeight();
    let footerheight = $('#footer').outerHeight();
    let scrollSection6 = section1Height + section2Height + section3Height + section4Height + section5Height


    //오른쪽 아래 fixed menu
    let menu = '.side-menu-box' //메뉴전체
    let menuClick = '.side-menu' //메뉴
    let menuOpen = '.side-menu-open' //오픈될메뉴
    let menuShape = '.fa-bars.bar' //메뉴아이콘
    let xShape = '.fa-xmark.x' //엑스아이콘
    let menuControl = 1;

    //오른쪽 아래 fixed menu 클릭
    $(menuClick).on('click', function () { //메뉴를클릭
        if (menuControl == 1) { //오픈될메뉴-오픈
            $(menuOpen).addClass('on')
            $(menu).removeClass('on')
            $(menuShape).css({ 'display': 'none' })
            $(xShape).css({ 'display': 'block' })
            $(menuClick).css({ 'background-color': '#334B45' })
            menuControl = 2;
        }
        else if (menuControl == 2) { //오픈될메뉴-클로즈
            $(menuOpen).removeClass('on')
            $(menu).addClass('on')
            $(menuShape).css({ 'display': 'block' })
            $(xShape).css({ 'display': 'none' })
            $(menuClick).css({ 'background-color': '#fff' })
            menuControl = 1;
        }
    })

    //오른쪽 아래 menu hover할때
    $(menu).on('mouseover', () => {
        $(menu).removeClass('on')
    })
    $(menu).on('mouseleave', function () {
        let menuStay = $(menuOpen).hasClass('on')
        if (menuStay == true) { }
        else {
            $(menu).addClass('on')
        }
    })

    // 포트폴리오 슬라이드
    let portNext = '.port-next' //오른쪽버튼
    let portPrev = '.port-prev' //왼쪽버튼
    let portSlide = '.port-slide'
    let portSlideLi = '.port-slide li'
    let port = 0;
    let portNumber = '.port-number' //title 번호
    let portTitle = '.port-text' //title p와 h3
    let portTitleList = ['HITE JINRO', 'HANSSEM', 'SEOUL FOOD'] //바뀔내용

    //section4 오른쪽으로 움직임 변수
    let portNextStart = function () {
        $(portSlide).stop().animate({ 'left': '-160%' }, () => {
            $(portSlide).css({ 'left': '-100%' })
            $(portSlide).children('li').first().appendTo(portSlide)
        })
    }

    //section4 왼쪽으로 움직임 변수
    let portPrevStart = function () {
        $(portSlide).stop().animate({ 'left': '-40%' }, () => {
            $(portSlide).css({ 'left': '-100%' })
            $(portSlideLi).last().prependTo(portSlide)
        })
    }

    // section4 portfolio 오른쪽버튼 클릭
    $(portNext).on('click', function () {
        if (port <= 1) {
            port++;
            $(portSlide).animate({ 'left': `${8.5 + (-83.5 * port)}%` })
            $(portNumber).text(`0${port + 1}`)
            $(portTitle).children('h3').text(portTitleList[port])
            if (port == 1) {
                $(`.video1`).get(0).load();
                $(`.video3`).get(0).load();
                $(`.video2`).get(0).play();
            }
            else if (port == 2) {
                $(`.video1`).get(0).load();
                $(`.video2`).get(0).load();
                $(`.video3`).get(0).play();

            }
        }
        else if (port == 2) {
            port = 0;
            $(portSlide).animate({ 'left': `${8.5 + (-83.5 * port)}%` })
            $(portNumber).text(`0${port + 1}`)
            $(portTitle).children('h3').text(portTitleList[port])
            $(`.video2`).get(0).load();
            $(`.video3`).get(0).load();
            $(`.video1`).get(0).play();
        }
    })

    // section4 portfolio 왼쪽버튼 클릭 
    $(portPrev).on('click', function () {
        if (port == 0) {
            port = 2;
            $(portSlide).animate({ 'left': `${8.5 + (-83.5 * port)}%` })
            $(portNumber).text('03')
            $(portTitle).children('h3').text(portTitleList[port])
            $(`.video1`).get(0).load();
            $(`.video2`).get(0).load();
            $(`.video3`).get(0).play();
        }
        else if (port <= 2) {
            port--;
            $(portSlide).animate({ 'left': `${8.5 + (-83.5 * port)}%` })
            $(portNumber).text(`0${port + 1}`)
            $(portTitle).children('h3').text(portTitleList[port])
            if (port == 1) {
                $(`.video1`).get(0).load();
                $(`.video3`).get(0).load();
            }
            else if (port == 0) {
                $(`.video2`).get(0).load();
                $(`.video3`).get(0).load();
            }
            $(`.video${port + 1}`).get(0).play();
        }
    })

    //section4 사진 hover하면 비디오 나옴
    $(portSlideLi).on('mouseover', function () {
        $(this).children('video').css({ 'opacity': '1' })
    })
    //section4 사진 mouseleave하면 비디오 없어짐
    $(portSlideLi).on('mouseleave', function () {
        $(this).children('video').css({ 'opacity': '0' })
    })

    //section4 첫번째 li hover하면 video start
    $('.port-slide li:nth-of-type(1)').on('mouseover', () => {
        $('.video1').get(0).play();
    })

    //section4 PLANNING
    let seoulFood = '.seoul-food' //panning 버튼
    let portfolioSee1 = '.portfolio-see1:nth-of-type(1)' //열릴화면
    let portfolioSee2 = '.portfolio-see1:nth-of-type(2)' //열릴화면
    let portfolioSee3 = '.portfolio-see1:nth-of-type(3)' //열릴화면
    let html = 'html' //html 스크롤 없앨 예정
    let body = 'body' //html 스크롤 없앨 예정
    let portfolioBut = '.portfolio-but'
    let allSeen = '.all-seen'
    let hiteJinro = '.hite-jinro'
    let hanssem = '.hanssem'

    //서울푸드 포트폴리오 열리는 버튼
    $(seoulFood).on('click', () => {
        $(body).css({ 'overflow': 'hidden' })
        $(html).css({ 'overflow': 'hidden' })
        $(portfolioSee1).addClass('on')
    })

    //하이트진로 포트폴리오 열리는 버튼
    $(hiteJinro).on('click', () => {
        $(body).css({ 'overflow': 'hidden' })
        $(html).css({ 'overflow': 'hidden' })
        $(portfolioSee2).addClass('on')
    })

    //한샘 포트폴리오 열리는 버튼
    $(hanssem).on('click', () => {
        $(body).css({ 'overflow': 'hidden' })
        $(html).css({ 'overflow': 'hidden' })
        $(portfolioSee3).addClass('on')
    })

    //엑스버튼 누르면 포트폴리오창 닫히는 버튼
    $(portfolioBut).on('click', () => {
        $(body).css({ 'overflow': 'auto' })
        $(html).css({ 'overflow': 'auto' })
        $(allSeen).removeClass('on')
    })

    // section5 popup slide 변수
    let popupNext = '.popup-right >i:nth-of-type(2)'
    let popupPrev = '.popup-right >i:nth-of-type(1)'
    let popupSlide = '.popup-slide'
    let popupSlideLi = '.popup-slide li'
    let popupFilter = 1;
    let popupImg = '.popup-img'

    //section5 글씨 변경 변수
    let titleText = [
        '음료 홍보 포스터', '새해 인사', '인생 사진뎐', '봄의 이야기', '2023 토끼 일러스트'
    ]
    let contentText = [
        '신메뉴 출시를 기념하는 음료 홍보 포스터입니다. 과일이라는 주제에 맞춰 과일을 상징하는 컬러를 믹스 매치하여 생동감있게 표현했습니다.',
        '새해에 일출하는 모습을 꽃이 만개하는 듯 표현한 제작물입니다. 새롭게 시작되는 한 해가 꽃과 같이 예쁘고 향긋하기를 바라는 마음에서 제작하였습니다.',
        '나만 아는 대한민국의 사진 명소를 소개하기 위한 홍보 제작물 입니다. SNS에 업로드 하는 것을 즐기는 MZ세대들을 타겟으로 정해 키치한 느낌을 살려보았습니다.',
        '봄이라는 주제로 만든 제작물입니다. 봄하면 가장 먼저 생각나는 벚꽃과 생기있는 풀을 함께 매치해 부드럽고 에너지있는 느낌을 주었습니다.',
        '검은 토끼의 해인 2023년을 기념하는 제작물입니다. 풍요와 번창이라는 의미를 가진 계묘년을 기념해 각양각색의 토끼들을 그려보았습니다.'
    ]

    //section5 오른쪽으로 이미지 움직임
    let popupNextStart = () => {
        if (popupFilter <= 4) {
            if (popupFilter <= 4) {
                $(popupSlide).stop().animate({ 'left': `${170 - (60 * popupFilter)}%` })
            }
            popupFilter++;
            $(popupImg).children('img').removeClass('filter')
            $(popupImg).children(`img:nth-of-type(${popupFilter})`).addClass('filter')
            $('.popup-title>div h3').text(titleText[popupFilter - 1])
            $('.popup-title >p').text(contentText[popupFilter - 1])
            $(popupSlideLi).children('button').removeClass('on')
            $(popupSlideLi).children('button').eq(popupFilter - 1).addClass('on')
            $('.popup-slide li').eq(popupFilter).addClass('on')
        }
        else if (popupFilter == 5) {
            popupFilter = 1;
            $(popupImg).children('img').removeClass('filter')
            $(popupImg).children(`img:nth-of-type(${popupFilter})`).addClass('filter')
            $('.popup-title>div h3').text(titleText[popupFilter - 1])
            $('.popup-title >p').text(contentText[popupFilter - 1])
            $(popupSlide).stop().animate({ 'left': '170%' })
            $(popupSlideLi).children('button').removeClass('on')
            $(popupSlideLi).children('button').eq(popupFilter - 1).addClass('on')
            $('.popup-slide li').eq(popupFilter).addClass('on')
        }
    }

    //section5 왼쪽으로이미지움직임
    let popupPrevStart = () => {
        if (popupFilter == 1) {
            popupFilter = 5;
            $(popupImg).children('img').removeClass('filter')
            $(popupImg).children(`img:nth-of-type(${popupFilter})`).addClass('filter')
            $('.popup-title>div h3').text(titleText[popupFilter - 1])
            $('.popup-title >p').text(contentText[popupFilter - 1])
            $(popupSlide).stop().animate({ 'left': '-70%' })
            $(popupSlideLi).children('button').removeClass('on')
            $(popupSlideLi).children('button').eq(popupFilter - 1).addClass('on')
            $('.popup-slide li').eq(popupFilter).addClass('on')

        }
        else if (popupFilter <= 5) {
            if (popupFilter <= 5) {
                $(popupSlide).stop().animate({ 'left': `${170 - (60 * (popupFilter - 2))}%` })
            }
            popupFilter--;
            $(popupImg).children('img').removeClass('filter');
            $(popupImg).children(`img:nth-of-type(${popupFilter})`).addClass('filter');
            $('.popup-title>div h3').text(titleText[popupFilter - 1])
            $('.popup-title >p').text(contentText[popupFilter - 1])
            $(popupSlideLi).children('button').removeClass('on')
            $(popupSlideLi).children('button').eq(popupFilter - 1).addClass('on')
            $('.popup-slide li').eq(popupFilter).addClass('on')
        }
    }

    //section5 자동 움직임 function
    function popupStart() {
        popupStop = setInterval(() => {
            popupNextStart();
        }, 8000)
    }

    //section5 자동움직임 시작
    popupStart();

    // section5 popup 오른쪽버튼 클릭
    $(popupNext).on('click', function () {
        clearInterval(popupStop);
        popupNextStart();
        popupStart();
    })

    // section5 popup 왼쪽버튼 클릭 
    $(popupPrev).on('click', function () {
        clearInterval(popupStop);
        popupPrevStart();
        popupStart();
    })

    //section5 이미지클릭
    let popupH3 = '.popup-title >div h3'
    let popupP = '.popup-title >p'

    //section5 작은 img 클릭하면 슬라이드 움직임
    $(popupImg).children('img').on('click', function () {
        let popupImgIndex = $(this).index();
        clearInterval(popupStop);
        $(popupImg).children('img').removeClass('filter')
        $(this).addClass('filter')
        $('.popup-slide li').eq(popupFilter).addClass('on')
        $(popupH3).text(titleText[popupImgIndex])
        $(popupP).text(contentText[popupImgIndex])
        if (popupImgIndex == 0) {
            $(popupSlide).stop().animate({ 'left': `170%` })
            popupFilter = 1;
        }
        else if (popupImgIndex == 1) {
            $(popupSlide).stop().animate({ 'left': '110%' })
            popupFilter = 2;
        }
        else if (popupImgIndex == 2) {
            $(popupSlide).stop().animate({ 'left': '50%' })
            popupFilter = 3;
        }
        else if (popupImgIndex == 3) {
            $(popupSlide).stop().animate({ 'left': '-10%' })
            popupFilter = 4;
        }
        else if (popupImgIndex == 4) {
            $(popupSlide).stop().animate({ 'left': '-70%' })
            popupFilter = 1;
        }
        $('.popup-slide li').eq(popupFilter).addClass('on')
        popupStart();
    })

    //section5 go to see click 
    let popupX = '.popup-see-x'
    let popupAll = '.seen1'
    let seen1Img = $('.seen1 .ipad-inner-img img')
    let imgAttr1 = './img/section3-1.png'
    let imgAttr2 = './img/section3-2.png'
    let imgAttr3 = './img/section3-3.png'
    let imgAttr4 = './img/section3-4.png'
    let imgAttr5 = './img/section3-5.png'

    //section5 left arrow click 변수
    function popupLeftClick() {
        let attr = seen1Img.attr('src')
        if (attr == imgAttr1) {
            seen1Img.attr({ 'src': `./img/section3-5.png` })
        }
        else if (attr == imgAttr5) {
            seen1Img.attr({ 'src': `./img/section3-4.png` })
        }
        else if (attr == imgAttr4) {
            seen1Img.attr({ 'src': `./img/section3-3.png` })
        }
        else if (attr == imgAttr3) {
            seen1Img.attr({ 'src': `./img/section3-2.png` })
        }
        else if (attr == imgAttr2) {
            seen1Img.attr({ 'src': `./img/section3-1.png` })
        }
    }

    //section5 right arrow click 변수
    function popupRightClick() {
        let attr = seen1Img.attr('src')
        if (attr == imgAttr1) {
            seen1Img.attr({ 'src': `./img/section3-2.png` })
        }
        else if (attr == imgAttr2) {
            seen1Img.attr({ 'src': `./img/section3-3.png` })
        }
        else if (attr == imgAttr3) {
            seen1Img.attr({ 'src': `./img/section3-4.png` })
        }
        else if (attr == imgAttr4) {
            seen1Img.attr({ 'src': `./img/section3-5.png` })
        }
        else if (attr == imgAttr5) {
            seen1Img.attr({ 'src': `./img/section3-1.png` })
        }
    }

    //section5 go to see 버튼 누르면 ipad 이미지 보임
    $('.popup-img-click1').on('click', function () {
        let btn = $(this).attr('id') // 1,2,3,4,5
        $('.popup-see1').css({ 'display': 'block' })
        $('.seen1 .ipad-inner-img img').attr({ 'src': `./img/section3-${btn}.png` })
    })

    // section5 ipad 엑스 버튼 누르면 아이패드 사라짐
    $(popupX).on('click', () => {
        $(popupAll).css({ 'display': 'none' })
    })

    //section5 왼쪽 버튼 누르면 이미지 src 변함
    $('.popup-see-left').on('click', function () {
        popupLeftClick()
    })
    //section5 오른쪽 버튼 누르면 이미지 src 변함
    $('.popup-see-right').on('click', function () {
        popupRightClick()
    })

    // section6 이미지 클릭 fade
    let section6Li = '.banner-img-list li'
    let section6Img = '.banner-img li .off'
    let section6on = '.on'
    let section6But = '.section6-but'
    let section6See = '.banner-see1'
    let section6Seen2 = '.seen2'
    let section6H3 = '.banner-text h3'
    let section6P = '.banner-text-con p'
    let bannerMainImg = '.banner-main-img'
    let section6Num = 0;
    let section6H3Text = ['LALA LAND', '댕댕이데이', 'NAKE', '제로웨이스트', '우주 세일 포스터']
    let section6PText = [
        '라라랜드의 명장면인 키스신과 춤추는 장면을 일러스트로 표현한 라라랜드 포스터입니다. 라라랜드를 본 관객이라면 그림을 보고도 바로 영화를 생각해 낼수 있는 두 명장면을 적절히 조합해 표현해 보았습니다.',
        '할인 행사나 페스티벌에 사용하기 좋은 용도로 제작된 댕댕이 맞이 기념 포스터입니다. 노란 컬러를 메인으로 설정해 밝고 통통튀는 느낌을 주었습니다.',
        'JUST DO IT이라는 나이키의 슬로건에 맞는 역동적인 홍보 포스터 입니다. 주력 상품인 운동화를 메인으로 잡아 농구선수를 모델로 선정했고, 농구공의 컬러인 주황색만 강조해 무채색의 포스터에 포인트감을 주었습니다.',
        '제로웨이스트를 실천하자는 의미의 포스터입니다. 그린색을 메인컬러로 설정해 친환경 느낌을 주었고, 파란색으로 뚜렷한 선 또는 강조하고 싶은 부분을 적절히 표현하였습니다.',
        '우주만큼 폭 넓고 많은 세일을 한다는 의미의 홍보 포스터입니다. 파란색 배경을 그라데이션으로 설정해 우주의 느낌을 주었고 타이틀은 네온컬러로 설정해 집중도를 높혔습니다.'
    ]

    //section6 자동 fadeIn fadeOut
    function section6Start() {
        section6Stop = setInterval(function () {
            if (section6Num <= 3) {
                section6Num++;
                $(bannerMainImg).children('img').removeClass('on')
                $(bannerMainImg).children(`img:nth-of-type(${section6Num + 2})`).addClass('on')
                $(section6H3).text(section6H3Text[section6Num]);
                $(section6P).text(section6PText[section6Num]);
                $(section6Li).removeClass('on')
                $(section6Li).eq(section6Num).addClass('on')
                $('.banner-img button').removeClass('on')
                $(`.banner-img button:nth-of-type(${section6Num + 1})`).addClass('on')
            }
            else if (section6Num == 4) {
                section6Num = 0;
                $(bannerMainImg).children('img').removeClass('on')
                $(bannerMainImg).children(`img:nth-of-type(${section6Num + 2})`).addClass('on')
                $(section6Li).removeClass('on')
                $(section6Li).eq(section6Num).addClass('on')
                $('.banner-img button').removeClass('on')
                $(`.banner-img button:nth-of-type(${section6Num + 1})`).addClass('on')
            }
        }, 5000)
    }

    //section6 setInterval start
    section6Start();

    //section6 img click fadeIn fadeOut
    $(section6Li).on('click', function () {
        let section6Index = $(this).index();//0,1,2,3,4
        let section6On = $(section6Img).eq(section6Index).hasClass('on')
        let section6Add = $(section6Img).eq(section6Index)

        clearInterval(section6Stop)
        if (section6On == true) { }
        else {
            $(section6Img).removeClass('on')
            $(section6Add).addClass('on')
            $(section6But).removeClass('on')
            $(section6But).eq(section6Index).addClass('on')
            $(section6Li).removeClass('on')
            $(this).addClass('on')
            if (section6Index <= 4) {
                $(section6H3).text(section6H3Text[section6Index]);
                $(section6P).text(section6PText[section6Index]);
            }
        }
        section6Start()
    })

    //section6 go to see 버튼 누르면 이미지 보임
    $(section6But).on('click', function () {
        let btn = $(this).attr('id') // 0,1,2,3,4
        $(section6See).css({ 'display': 'block' })
        $('.seen2 .ipad-inner-img img').attr({ 'src': `./img/product${btn}.png` })
    })

    // section6 ipad x button click 아이패드 사라짐
    let bannerX = '.banner-see-x'
    $(bannerX).on('click', () => {
        $(section6Seen2).css({ 'display': 'none' })
    })

    //section6 ipad
    let seen2Img = $('.seen2 .ipad-inner-img img')
    let bannerImgAttr0 = './img/product0.png'
    let bannerImgAttr1 = './img/product1.png'
    let bannerImgAttr2 = './img/product2.png'
    let bannerImgAttr3 = './img/product3.png'
    let bannerImgAttr4 = './img/product4.png'

    //section6 ipad img 왼쪽 이동 변수
    function bannerLeftClick() {
        let attr = seen2Img.attr('src')
        if (attr == bannerImgAttr0) {
            seen2Img.attr({ 'src': `./img/product4.png` })
        }
        else if (attr == bannerImgAttr4) {
            seen2Img.attr({ 'src': `./img/product3.png` })
        }
        else if (attr == bannerImgAttr3) {
            seen2Img.attr({ 'src': `./img/product2.png` })
        }
        else if (attr == bannerImgAttr2) {
            seen2Img.attr({ 'src': `./img/product1.png` })
        }
        else if (attr == bannerImgAttr1) {
            seen2Img.attr({ 'src': `./img/product0.png` })
        }
    }

    //section6 ipad img 오른쪽 이동 변수
    function bannerRightClick() {
        let attr = seen2Img.attr('src')
        if (attr == bannerImgAttr0) {
            seen2Img.attr({ 'src': `./img/product1.png` })
        }
        else if (attr == bannerImgAttr1) {
            seen2Img.attr({ 'src': `./img/product2.png` })
        }
        else if (attr == bannerImgAttr2) {
            seen2Img.attr({ 'src': `./img/product3.png` })
        }
        else if (attr == bannerImgAttr3) {
            seen2Img.attr({ 'src': `./img/product4.png` })
        }
        else if (attr == bannerImgAttr4) {
            seen2Img.attr({ 'src': `./img/product0.png` })
        }
    }

    //section6 ipad-img left arrow click
    $('.banner-see-left').on('click', function () {
        bannerLeftClick();
    })

    //section6 ipad-img right arrow click
    $('.banner-see-right').on('click', function () {
        bannerRightClick();
    })

    //footer resume
    let resumeBtn = '.resume-btn'
    let resumeModal = '.resume-modal'
    let resumeX = '.resume-modal i'

    $(resumeBtn).on('click', () => {
        $(html).css({ 'overflow': 'hidden' })
        $(body).css({ 'overflow': 'hidden' })
        $(resumeModal).css({ 'display': 'block' })
    })
    $(resumeX).on('click', () => {
        $(html).css({ 'overflow': 'auto' })
        $(body).css({ 'overflow': 'auto' })
        $(resumeModal).css({ 'display': 'none' })
    })


    //footer 포트폴리오를 봐주셔서 감사합니다
    // let lastScroll = 0;
    // let value;
    // let moveFooter = $('.thanks-box h2')
    // 
    // $(window).on('scroll', function () {
    //     let scrollTop = $(this).scrollTop();
    //     if (scrollTop >= scrollSection6) {
    //         value = (window.pageYOffset - scrollSection6);
    //         moveFooter.css({ 'transform': `translateX(${-value + footerheight}px)` })
    //     }
    // })


})