import { getLiveWeather } from './weatherAPI.js';

var citySelect = document.querySelector('#city-select');
var weatherBox = document.querySelector('#weather-box');

// 선택한 도시가 바뀌면 날씨를 다시 불러옵니다.
citySelect.addEventListener('change', async function (event) {
  var selectedValue = event.target.value;
  if (selectedValue === 'none') {
    weatherBox.innerHTML = '<p>도시를 선택하세요.</p>';
    return;
  }

  var coords = selectedValue.split(',');
  var cityName = citySelect.options[citySelect.selectedIndex].text;
  weatherBox.innerHTML = '<p>' + cityName + '</p><p>위도: ' + coords[0] + ', 경도: ' + coords[1] + '</p><p>실시간 날씨 로딩 중... ⏳</p>';
  try {
    var weather = await getLiveWeather(coords[0], coords[1]);
    weatherBox.innerHTML = '<h4>' + cityName + ' 실시간 날씨</h4><p>위도: ' + coords[0] + ', 경도: ' + coords[1] + '</p><p>🌡️ 기온: ' + weather.temp + '°C</p><p>💧 습도: ' + weather.humidity + '%</p>';
  } catch (error) {
    weatherBox.innerHTML = '<p>날씨 정보를 가져오지 못했습니다.</p>';
    console.error(error);
  }
});
