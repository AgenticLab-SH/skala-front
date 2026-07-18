// 여러 페이지에서 같이 사용하는 간단한 기능을 한 파일에 모았습니다.
var currentFile = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.site-nav a').forEach(function (link) {
  if (link.getAttribute('href') === currentFile) {
    link.setAttribute('aria-current', 'page');
  }
});

var navigation = document.querySelector('.site-nav');
if (navigation) {
  var themeButton = document.createElement('button');
  themeButton.type = 'button';
  themeButton.className = 'theme-toggle';
  themeButton.textContent = '어둡게 보기';
  themeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    themeButton.textContent = document.body.classList.contains('dark-mode')
      ? '밝게 보기'
      : '어둡게 보기';
  });
  navigation.appendChild(themeButton);
}

var clock = document.querySelector('#current-time');
if (clock) {
  function updateClock() {
    clock.textContent = new Date().toLocaleString('ko-KR');
  }
  updateClock();
  setInterval(updateClock, 1000);
}
