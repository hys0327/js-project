// jquery 기반 라이브러리
$(document).ready(function () {
  $('.slider').slick({
    autoplay: true, // 자동 재생
    autoplaySpeed: 3000, // 슬라이드 전환 딜레이
    dots: true, // 페이지네이션
    arrows: true, // prev, next 버튼
    infinite: true, // 무한 루프 설정
    spped: 500, // 전환되는 애니메이션 속도
    slidesToShow: 1, // 한번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 한번에 이동할 슬라이드 수
    responsive: [
      {
        breakpoint: 1024, // 1024px 이하
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
