const API_KEY ="147018b6abe1b0d2425563c21285caa0"

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("너가 사는 곳은",lat,lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric
`
    fetch(url).then(Response => Response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText=data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp};`
    });
}

function onGeoError(){
    alert("당신을 찾을수 없어요.당신을 위한 날씨도 찾을 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError)