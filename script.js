
const apiKey ="c547d19d0b52e4bd68f0e88a5ecda243";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

    var data = await response.json();
    console.log(data);

    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    } 
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
