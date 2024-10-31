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

const swiper = new Swiper('.main_swiper', {
  effect: 'fade',
  speed: 2000,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false, // 사용자가 클릭해도 자동 재생 유지
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});


$(window).on('scroll', function() {
  var imgTop = $('img').offset().top; // .visual의 top 위치
  var scrollTop = $(window).scrollTop(); // 현재 스크롤 위치
  var windowHeight = $(window).height(); // 윈도우 창 높이

  // 스크롤 위치가 .visual의 top에 닿았을 때
  if (scrollTop + windowHeight >= imgTop) {
    setTimeout(function() {
      $('.img_bg_left, .img_bg_right').css('width', '0');
    } );
  }
});

// window.addEventListener('load', () => {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.to('.img_wrap img', {
//     transformOrigin: 'center center',
//     scrollTrigger : {
//       trigger : 'img',
//       start : 'top top',
//       // end : 'bottom top',
//       pin : true,
//       scrub : true,
//       markers: true,
//     }
//   })
// })