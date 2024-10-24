
// $('nav #gnb>li>a').hover(function(){
//   $(header).addclass('on')
// });
// $('nav #gnb>li>a').mouseout(function(){
//   $('header.on').removeClass('on')
// });


// $('#gnb>li').hover(function(){
//   $(this).children('.dep2').stop().slideDown()
//   $('header').addClass('on')
//   }, function(){
//   $('#gnb>li .dep2').stop().slideUp();
//   $('header').removeClass('on')
// })

$('#gnb>li').hover(function(){
  $('.dep2').stop().fadeIn(500, "linear")
  $('.gnb_bg').stop().fadeIn(500, "linear")
  $('header').addClass('on')
  }, function(){
  $('.dep2').stop().fadeOut(500, "linear")
  $('.gnb_bg').stop().fadeOut(500, "linear")
  $('header').removeClass('on')
})

const swiper = new Swiper('.main_swiper',{
  autoplay: true,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
})
