function startGame() {
  var computerNum = Math.floor(Math.random() * 50) + 1;
  var count = 0;

  while (true) {
    var input = prompt('1부터 50 사이의 숫자를 입력하세요.');
    if (input === null) {
      alert('게임을 취소했습니다.');
      return;
    }
    var userGuess = Number(input);
    if (!Number.isInteger(userGuess) || userGuess < 1 || userGuess > 50) {
      alert('1부터 50 사이의 정수를 입력하세요.');
      continue;
    }
    count += 1;
    if (userGuess === computerNum) {
      alert('축하합니다! ' + count + '번 만에 맞추셨습니다.');
      return;
    }
    alert(userGuess > computerNum ? 'Down!' : 'Up!');
  }
}
