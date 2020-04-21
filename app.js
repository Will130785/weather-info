// API Key: e278f6dd081648039c284643202104

class Weather {
    constructor() {

    }

    async getWeather(search) {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=e278f6dd081648039c284643202104&q=${search}`);

        let responseData = await response.json();
        return responseData;
    }

}

let weather = new Weather();


const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search");
const country = document.querySelector(".country-info");
const city = document.querySelector(".city-info");
const region = document.querySelector(".region-info");
const image = document.querySelector(".image");
const textDesc = document.querySelector(".text");
const temp = document.querySelector(".temp-info");
const feelsLike = document.querySelector(".feels-like-info");
const windSpeed = document.querySelector(".wind-speed-info");
const windDirection = document.querySelector(".wind-direction-info");
const humidity = document.querySelector(".humidity-info");
const uvRating = document.querySelector(".uv-rating-info");
const visibility = document.querySelector(".visibility-info");
const display = document.querySelector(".display");

searchBtn.addEventListener("click", e => {
    e.preventDefault();
    let searchText = searchInput.value;

    weather.getWeather(searchText)
    .then(res => {
        console.log(res);

        country.textContent = res.location.country;
        city.textContent = res.location.name;
        region.textContent = res.location.region;
        image.innerHTML = `
            <img src=${res.current.condition.icon}>
        `;
        textDesc.textContent = res.current.condition.text;
        temp.textContent = res.current.temp_c + " °C";
        feelsLike.textContent = res.current.feelslike_c + " °C";
        windSpeed.textContent = res.current.wind_mph + " mph";
        windDirection.textContent = res.current.wind_dir;
        humidity.textContent = res.current.humidity + " %";
        uvRating.textContent = res.current.uv;
        visibility.textContent = res.current.vis_miles + " miles";

        display.style.display = "grid";
    });

});