$('#gnb>li').hover(function(){
  $('.dep2').stop().fadeIn(500, "linear")
  $('.gnb_bg').stop().fadeIn(500, "linear")
  $('header').addClass('on')
  $('.btn_util img').attr('src', '../image/icon_search_blue.svg');
  }, function(){
  $('.dep2').stop().fadeOut(500, "linear")
  $('.gnb_bg').stop().fadeOut(500, "linear")
  $('header').removeClass('on')
  $('.btn_util img').attr('src', 'image/icon_search_white.svg');
})

$('.family_wrap button').click(function(){
  $(this).toggleClass('open');
  $('.family_wrap ul').toggle();
})

const swiper = new Swiper('.main_swiper',{
  autoplay: true,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
})
