function displayTemperature(response){
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let description = document.querySelector("#description");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    description.innerHTML = response.data.weather[0].description;
}

let apiKey = "20a0391bea96af092ee24b4f070a3e70";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${apiKey}`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);