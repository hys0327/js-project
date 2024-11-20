// 기본 툴팁 (호버 트리거)
tippy('#btn1', {
  content: 'This is a tooltip!',
  placement: 'top', // 툴팁 위치 (top, bottom, left, right)
  animation: 'scale', // 애니메이션 효과
});

// 클릭 트리거 툴팁
tippy('#btn2', {
  content: 'You clicked me!',
  trigger: 'click', // 클릭 이벤트로 툴팁 표시
  placement: 'right',
  animation: 'shift-away',
});

// 커스텀 HTML 콘텐츠 툴팁
tippy('#btn3', {
  content: `<strong style="color: #007aff;">Hello!</strong><br> This is a custom HTML tooltip.`,
  allowHTML: true,
  placement: 'bottom',
  animation: 'fade',
});

/* 
    placement : 'top', 'bottom', 'left', 'right', 'auto', 'auto-start', 'auto-end'
    animation : 'scale', 'shift-away', 'fade'
    trigger : hover(기본값), click, focus, manual
    allowHTML : 툴팁 content 로 HTML을 인식할 수 있게 함
    content : 툴팁에 표시할 내용
*/
