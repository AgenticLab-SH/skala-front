function checkGrade() {
  var subjects = ['HTML', 'CSS', 'JavaScript'];
  var total = 0;
  for (var i = 0; i < subjects.length; i += 1) {
    var score = Number(prompt(subjects[i] + ' 점수를 입력하세요.'));
    if (!Number.isFinite(score) || score < 0 || score > 100) {
      alert('0부터 100 사이의 점수를 입력해야 합니다.');
      return;
    }
    total += score;
  }
  var average = total / subjects.length;
  var grade = 'F';
  if (average >= 90) grade = 'A';
  else if (average >= 80) grade = 'B';
  else if (average >= 70) grade = 'C';
  else if (average >= 60) grade = 'D';

  var result = average >= 60 ? '합격입니다.' : '불합격입니다.';
  alert('총점: ' + total + '점\n평균: ' + average.toFixed(1) + '점\n등급: ' + grade + '\n결과: ' + result);
}
