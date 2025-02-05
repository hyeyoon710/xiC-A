gsap.registerPlugin(ScrollTrigger);

$(window).on('scroll', function() {
  let currentScrollTop = $(this).scrollTop(); // 현재 스크롤 위치

  if (currentScrollTop > 110) {
    $('.btn_util img').attr('src', '../image/icon_search_blue.svg');

    if (currentScrollTop > lastScrollTop) {
      // 아래로 스크롤 중이면 헤더 숨기기
      $('header').removeClass('fixed').slideUp();
    } else {
      // 위로 스크롤 중이면 헤더 보이기
      $('header').addClass('fixed').slideDown();
    }
  } else {
    // 스크롤이 110px 이하일 때는 헤더가 보임
    $('.btn_util img').attr('src', 'image/icon_search_white.svg');
      $('header').removeClass('fixed').slideDown();
  }
    lastScrollTop = currentScrollTop; // 이전 스크롤 위치 업데이트
  })

  $('.util .l1').click(function() {
    $(this).toggleClass('click')

    if ($(this).hasClass('click')) {
      $('.util .l2').show().css({'background': '#e5eff1', 'color': '#000'});
  } else {
      $('.util .l2').hide();
  }
  })

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

$(document).ready(function() {
  let currentVideo = 1; // 현재 재생 중인 비디오 번호
  const totalVideos = 3; // 총 비디오 개수

  function showVideoAndText(videoNum) {
      $('.main_visual video').css('z-index', 0); // 비디오 숨기기
      $('.pagination_wrapper>span').hide(); // 모든 텍스트 숨기기

      $(`.main_visual .v${videoNum}`).css('z-index', 1); // 비디오 보이기
      $(`.pagination_wrapper .page${videoNum}`).fadeIn(); // 관련 텍스트 보이기
  }

  function cycleVideos() {
      showVideoAndText(currentVideo); // 현재 비디오와 텍스트 보여주기

      // 다음 비디오로 전환 (1 -> 2 -> 3 -> 1 순환)
      currentVideo = (currentVideo % totalVideos) + 1;

      // 5초 후에 다음 비디오와 텍스트로 전환
      setTimeout(cycleVideos, 5000);
  }

  // 첫 번째 비디오와 텍스트를 보여주고, 순환 시작
  cycleVideos();
});

function updateSubTextVisibility(index) {
  // 모든 sub_txt의 span에서 slide-up 클래스 제거하고 display를 none으로 설정
  document.querySelectorAll('.paging .sub_txt span').forEach((el) => {
    el.style.display = 'none';
    el.classList.remove('slide-up'); // 이전에 추가된 애니메이션 클래스 제거
  });

  // 현재 슬라이드 인덱스에 해당하는 sub_txt span을 보이고 slide-up 클래스를 추가
  const activeSubTxtSpan = document.querySelectorAll('.paging')[index].querySelector('.sub_txt span');
  if (activeSubTxtSpan) {
    activeSubTxtSpan.style.display = 'block'; // 텍스트 표시
    activeSubTxtSpan.classList.add('slide-up'); // 애니메이션 클래스 추가
  }
}

// Swiper 설정에 이벤트 연결
const mainswiper = new Swiper('.main_visual .main_swiper', {
  effect: 'fade',
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  on: {
    init: function () { // 초기 로드 시 첫 번째 슬라이드의 sub_txt만 표시
      updateSubTextVisibility(this.realIndex);
    },
    slideChange: function () { // 현재 슬라이드 인덱스를 기준으로 sub_txt 업데이트
      updateSubTextVisibility(this.realIndex);
    },
  },
});

// 초기 페이지 로드 시 첫 번째 슬라이드의 텍스트에 애니메이션 적용
document.addEventListener('DOMContentLoaded', function () {
  updateSubTextVisibility(0);
});


const swiper = new Swiper('.performance_wrap .main_swiper', {
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

const ani1 = gsap.timeline()

ani1.from('.txt_box .s1', {yPercent : -100})
.from('.txt_box .s2', {yPercent : -100})

ScrollTrigger.create({
  animation : ani1,
  trigger: '.visual',
  start : 'top 50%',
  // markers: true,
})

gsap.from('.img_wrap', {
  width : 0,
  scrollTrigger : {
      trigger : '.visual',
      start : 'top 50%',
      // end : 'bottom top',
      scrub : true,
      // markers: true,
    }
  })
