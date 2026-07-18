function showMyBag() {
  var myBag = [
    { name: '갤럭시북5프로', count: 1 },
    { name: '칫솔과 치약', count: 1 },
    { name: '노트', count: 1 },
    { name: '충전케이블', count: 2 }
  ];
  var result = '🎒 김상훈의 가방\n';
  for (var i = 0; i < myBag.length; i += 1) {
    result += '- ' + myBag[i].name + ': ' + myBag[i].count + '개\n';
  }
  alert(result);
}
