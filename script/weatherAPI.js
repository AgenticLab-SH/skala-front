export async function getLiveWeather(lat, lon) {
  // 화면 코드와 API 호출을 나누기 위해 파일을 분리했습니다.
  var url = 'https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon + '&current=temperature_2m,relative_humidity_2m';
  var response = await fetch(url);
  if (!response.ok) throw new Error('날씨 API 응답 오류');
  var data = await response.json();
  return {
    temp: data.current.temperature_2m,
    humidity: data.current.relative_humidity_2m
  };
}
