// DOM
const slider = document.querySelector('.slider');
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const pageIndicator = document.querySelector('.page-indicator');
const currentSlide = pageIndicator.querySelector('.current');
const totalSlide = pageIndicator.querySelector('.total');
const pauseButton = document.querySelector('.slide-btn.pause');
const playButton = document.querySelector('.slide-btn.play');
const totalSlides = slides.length;
let currentIndex = 0;
let autoSlideInterval;
let isAutoSliding = true;

// 페이지 업데이트
function updatePageIndicator() {
  currentSlide.textContent = currentIndex + 1;
}

// 슬라이드 이동
function showSlide(index) {
  const offset = -index * 100;
  slideContainer.style.transform = `translateX(${offset}%)`;
  updatePageIndicator(); // 페이지 표시 업데이트
}

function goToNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

// prev 클릭
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
  resetAutoSlide();
});

// next 클릭
nextButton.addEventListener('click', () => {
  goToNextSlide();
  resetAutoSlide();
});

// prev, next 버튼 보이기
slider.addEventListener('mouseover', function () {
  prevButton.style.opacity = '0.7';
  nextButton.style.opacity = '0.7';
});

// prev, next 버튼 감추기
slider.addEventListener('mouseout', function () {
  prevButton.style.opacity = '0';
  nextButton.style.opacity = '0';
});

// 자동 슬라이드 시작 함수
function startAutoSlide() {
  autoSlideInterval = setInterval(goToNextSlide, 5000);
  isAutoSliding = true;
  pauseButton.style.display = 'flex';
  playButton.style.display = 'none';
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
  isAutoSliding = false;
  pauseButton.style.display = 'none';
  playButton.style.display = 'flex';
}

// 자동 슬라이드 재설정 함수
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  if (isAutoSliding) startAutoSlide();
}

// pause 버튼 클릭 시, 자동 슬라이드 중지
pauseButton.addEventListener('click', function () {
  stopAutoSlide();
});

// play 버튼 클릭 시 자동 슬라이드 시작
playButton.addEventListener('click', function () {
  startAutoSlide();
});

// 초기 슬라이드
showSlide(currentIndex);
startAutoSlide();
