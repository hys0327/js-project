// header 로드
function loadHeader() {
  fetch('../layouts/header.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('header-bg').innerHTML = data;
      // 헤더 로드 후 이벤트 초기화
      initializeHeaderEvents();
    });
}

// function loadMobileMenu() {
//   fetch('../components/popup-mobile-menu.html')
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById('popup-container').innerHTML = data;
//       // 모바일 메뉴 로드 후 이벤트 초기화
//       initialzeMobileMenuEvents();
//     });
// }

// header 관련 이벤트
function initializeHeaderEvents() {
  const nav = document.querySelector('header nav');
  const gnbList = document.querySelectorAll('nav .gnb li');
  const lnbList = document.querySelectorAll('header .lnb-wrap');
  const mobile_menu = document.querySelector('.btn-mobile-menu');

  gnbList.forEach((gnb) => {
    gnb.addEventListener('mouseenter', () => {
      //
      gnbList.forEach((item) => item.classList.remove('active'));
      // 모든 lnb 숨기기
      lnbList.forEach((lnb) => {
        lnb.style.display = 'none';
      });
      gnb.classList.add('active');
      // gnb에 맞는 lnb 보이기
      if (gnb.classList.contains('check')) {
        document.querySelector('.lnb-wrap.check').style.display = 'block';
      } else if (gnb.classList.contains('transfer')) {
        document.querySelector('.lnb-wrap.transfer').style.display = 'block';
      } else if (gnb.classList.contains('bills')) {
        document.querySelector('.lnb-wrap.bills').style.display = 'block';
      } else if (gnb.classList.contains('forex')) {
        document.querySelector('.lnb-wrap.forex').style.display = 'block';
      } else if (gnb.classList.contains('financial')) {
        document.querySelector('.lnb-wrap.financial').style.display = 'block';
      }
    });

    lnbList.forEach((lnb) => {
      lnb.addEventListener('mouseenter', () => {
        const relatedGnb = document.querySelector(
          `nav .gnb .${lnb.classList[1]}`
        );
        if (relatedGnb) relatedGnb.classList.add('active');
        lnb.style.display = 'block';
      });

      lnb.addEventListener('mouseleave', () => {
        // lnb-wrap.bills 와 같은 규칙은 classList로 조회했을 때 0: lnb-wrap, 1: bills 로 구분할수있음
        const relatedGnb = document.querySelector(
          `nav .gnb .${lnb.classList[1]}`
        );
        // console.log('classList', lnb.classList);

        if (relatedGnb) relatedGnb.classList.remove('active');
        lnb.style.display = 'none';
      });
    });

    nav.addEventListener('mouseleave', () => {
      lnbList.forEach((lnb) => {
        lnb.style.display = 'none';
      });

      gnbList.forEach((gnb) => {
        gnb.classList.remove('active');
      });
    });
  });

  // 모바일 팝업메뉴 불러오기
  // mobile_menu.addEventListener('click', loadMobileMenu);
}

// 모바일 메뉴 닫기 이벤트
function initialzeMobileMenuEvents() {
  const closeButton = document.querySelector('.btn-close');
  const popupContainer = document.getElementById('popup-container');
  console.log('closeButton', closeButton);
  if (closeButton) {
    closeButton.addEventListener('click', function () {
      popupContainer.innerHTML = '';
    });
  }
}

window.addEventListener('DOMContentLoaded', loadHeader);
