$(()=>{


    //header pc menu
    let menuPc = '.menu'
    let pcMenuBack = '.pc-menu-back'
    let pcMenu = '.pc-menu'
    let nav ='.nav'
    let hoverA1 = '.hoverA1.pc'
    let search = '.search'
    let moMenu ='.mo-menu'
    let hoverMenu = '.hover-menu'
    let menuNumber = 1;
    let menuImg = ['../down_img1.jpg', '../down_img2.jpg', '../down_img3.jpg', '../down_img4.jpg']
    //클릭했을때 메뉴 없어짐
    let blackBack = function(){
      $(pcMenu).animate({'left':'-450px'})
        $(pcMenuBack).css({'opacity':'0'})
        setTimeout(function(){
            $(pcMenuBack).css({'display':'none'})
        },300)
    }
    //클릭하면 메뉴 생김
    let menuClick = function(){
      $(pcMenuBack).css({'opacity':'0.7'})
          $(pcMenuBack).css({'display':'block'})
          $(nav).css({'background-color':'#fff'})
          $(search).find('i').css({'color':'#333'})
          setTimeout(function(){
              $(pcMenu).animate({'left':'0%'})
          },300)
    }
    // 메뉴에 호버하면 메뉴 생김
    $(menuPc).children('li').on('mouseenter',function(){
        let hoverMenuIndex = $(this).index(); //0,1,2,3
        $(pcMenuBack).css({'opacity':'0.7'})
        $(pcMenuBack).css({'display':'block'})
        $(nav).css({'background-color':'#fff'})
        $(menuPc).find('a').css({'color':'#333'})
        $(search).find('a').css({'color':'#333'})
        $(search).find('i').css({'color':'#333'})
        setTimeout(function(){
            $(pcMenu).animate({'left':'0%'})
        },300)
        if(hoverMenuIndex<=3){
            $(hoverA1).children('a').css({'display':'none'})
            $(hoverA1).children(`a:nth-of-type(${hoverMenuIndex+1})`).css({'display':'flex'})
            $(hoverMenu).children('img').attr({'src':menuImg[hoverMenuIndex]})
        }
    })
    //블랙 배경 클릭하면 메뉴 없어짐
    $(pcMenuBack).on('click',function(){
      blackBack();
    })
    //메뉴 아이콘 클릭하면 메뉴 생기고 없어짐
    $(moMenu).on('click',function(){
      if(menuNumber==1){
        menuClick();
          menuNumber++;
        }
      else if(menuNumber==2){
        blackBack();
        menuNumber--;
      }
    })






$('#settingBtn').on('click',()=>{
  $('.menu.pc').toggleClass('active');
})
$('#settingClose').on('click',()=>{
  $('.menu.pc').toggleClass('active');
})



})























