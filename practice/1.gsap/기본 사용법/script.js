const box = document.querySelector('.box');
// const button = document.querySelector('#animationBtn');
const startBtn = document.querySelector('#startAnimation');
const resetBtn = document.querySelector('#resetAnimation');
const timeline = gsap.timeline({ paused: true });

timeline
  .to(box, { x: 200, duration: 1, ease: 'power2.inOut' })
  .to(box, { y: 100, backgroundColor: '#ff6f61', duration: 1 }, '<')
  .to(box, {
    scale: 1.5,
    rotate: 180,
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
  })
  .to(box, { opacity: 0.5, duration: 0.5 })
  .to(box, {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotate: 0,
    backgroundColor: 'lightblue',
    duration: 1,
  });

startBtn.addEventListener('click', () => {
  timeline.play();
});

resetBtn.addEventListener('click', () => {
  // 초기상태로 돌리고, 멈춤
  // pause() 미 할당 시, 초기상태로 돌리고 다시 실행
  timeline.restart().pause();
  //   timeline.restart();
});

/* 
    1. gsap.to(애니메이션 대상, 애니메이션 속성)
    2. gsap.timeline.to : 순서대로 실행
        - timeline.to의 경우, 세번째 인자까지 등록이 가능함(애니메이션 실행 시간 제어)
            1. timeline.to("대상", "속성") : 기본 실행
            2. timeline.to("대상", "속성", "<") : 이전 애니메이션과 동시 실행
            3. timeline.to("대상", "속성", "=0.5") : 절대시간 0.5초 후 실행, 그냥 0.5랑 같은데, 명시적 선언
            4. timeline.to("대상", "속성", "<-1") : 이전 애니메이션 시작 시점부터 1초 먼저 실행
            5. timeline.to("대상", "속성", "<+0.5") : 이전 애니메이션 시작 시점부터 0.5초 후에 시작
    3. gsap.timeline({ paused: true}) : 버튼 클릭시 실행 가능
        - paused 속성 미 설정 시, 바로 실행
        - 
        - 
    
*/
