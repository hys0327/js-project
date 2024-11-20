// Swiper 초기화
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000, // 3초마다 슬라이드 전환
    disableOnInteraction: false, // 사용자 상호작용 후에도 자동재생 유지
  },
  pagination: {
    el: '.swiper-pagination', // 페이지네이션 요소
    clickable: true, // 페이지네이션 클릭 가능
  },
  navigation: {
    nextEl: '.swiper-button-next', // 다음 버튼
    prevEl: '.swiper-button-prev', // 이전 버튼
  },
  slidesPerView: 1, // 한 번에 보이는 슬라이드 개수
  spaceBetween: 20, // 슬라이드 간 간격(px)
  breakpoints: {
    640: {
      slidesPerView: 2, // 화면 크기가 640px 이상일 때 2개씩 표시
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3, // 화면 크기가 1024px 이상일 때 3개씩 표시
      spaceBetween: 40,
    },
  },
});

/* 
    loop: 반복여부 설정
    autoplay: 자동재생 설정
        - autoplay: {delay: '', disableOnInteraction: '',}
            - disableOnInteraction : 네비게이션 사용 후에, 자동 재생을 멈출것인지 여부
    pagination: 페이지네이션
        - pagination: {el : '대상 선택자', clickable: '클릭가능 여부'}
    navigation: 네비게이션(prev, next 버튼)
        - navigation: {'prev 대상 선택자', 'next 대상 선택자'}
*/
