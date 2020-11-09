$(function(){
  // 스킵메뉴
  var skip = $('.skip_menu>a');
  var skipMenu = $('.skip_menu');

  skip.on({
    focus : function(){
      skipMenu.addClass('active');
    },
    blur : function(){
      skipMenu.removeClass('active');
    }
  });
  
  // ===toggle nav 호출 & body 스크롤 not
    $('#tgl_menu').click(function(){
      $('.main_nav').toggleClass('active');
      $(this).toggleClass('active');
      $('html,body').addClass('not_scroll');
    });
    $('#close_btn').click(function(){
      $('.main_nav').removeClass('active');
      $(this).toggleClass('active');
      $('html,body').removeClass('not_scroll');
    });
    // document.addEventListener('scroll',function(){
    //   var scrTop = document.documentElement.scrollTop;

    // });
    // $('header').addClass('active');
    
    // 윈도우 스크롤
    $(window).on('scroll',function(){
      var scrTop = $(window).scrollTop();
      var hrd = $('#header02');
      if(scrTop>0){
        hrd.addClass('active');
      }else{
        hrd.removeClass('active');
      }
    });
});