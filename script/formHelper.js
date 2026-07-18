var password = document.querySelector('#password');
var showPassword = document.querySelector('#show-password');
var introduction = document.querySelector('#introduction');
var introductionCount = document.querySelector('#introduction-count');

showPassword.addEventListener('change', function () {
  password.type = showPassword.checked ? 'text' : 'password';
});

function updateIntroductionCount() {
  introductionCount.textContent = introduction.value.length + ' / 200자';
}

introduction.addEventListener('input', updateIntroductionCount);
updateIntroductionCount();
