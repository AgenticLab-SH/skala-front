var params = new URLSearchParams(window.location.search);
var resultBox = document.querySelector('#result-summary');

var interestNames = {
  frontend: '프론트엔드',
  backend: '백엔드',
  ax: 'AX',
  domain: '본인의 기존 도메인'
};

var routeNames = {
  skala: 'SKALA 수업',
  review: '지인 소개',
  search: '웹 검색'
};

var genderNames = {
  male: '남성',
  female: '여성',
  none: '선택 안 함'
};

function addResult(list, label, value) {
  var term = document.createElement('dt');
  var description = document.createElement('dd');
  term.textContent = label;
  description.textContent = value || '입력하지 않음';
  list.append(term, description);
}

if (!params.toString()) {
  resultBox.innerHTML = '<p>전달된 값이 없습니다. 입력 화면에서 내용을 작성해 주세요.</p>';
} else {
  var resultList = document.createElement('dl');
  resultList.className = 'result-list';

  var email = params.get('emailId') + '@' + params.get('emailDomain');
  var interests = params.getAll('interest').map(function (item) {
    return interestNames[item] || item;
  });

  addResult(resultList, '아이디', params.get('userId'));
  addResult(resultList, '이메일', email);
  addResult(resultList, '이름', params.get('name'));
  addResult(resultList, '생년월일', params.get('birthday'));
  addResult(resultList, '성별', genderNames[params.get('gender')]);
  addResult(resultList, '관심 분야', interests.join(', '));
  addResult(resultList, '알게 된 경로', routeNames[params.get('signupRoute')]);
  addResult(resultList, '자기소개', params.get('introduction'));

  // 비밀번호는 결과 화면에 표시하지 않습니다.
  resultBox.replaceChildren(resultList);
}
