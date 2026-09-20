const weatherButton=document.getElementById("btn");
const apiKey="2ff45e1e43e05fd73dbfcbd4c11ac988";
const cityName=document.querySelector(".cityName");
const dataScreen=document.querySelector(".data-screen");
const startScreen=document.querySelector(".start-screen");
const backButton = document.getElementById("backBtn");
weatherButton.addEventListener("click", async event =>{
    startScreen.classList.remove("active");
    dataScreen.classList.add("active");
    event.preventDefault();
    const city=cityName.value;

    if(city){
        try{
            const weatherData=await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }
});

async function getWeatherData(city){
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response=await fetch(apiUrl);
    console.log(response);
    if (!response.ok){
        throw new Error("Could not fetch weather data.");
    }
    else{
        return await response.json();
    }
}
function displayWeatherInfo(data){
    console.log(data);
    const {name:city, main:{temp,humidity}, weather:[{description,id}]}=data;

    document.querySelector(".cityDisplay").textContent=city;
    document.querySelector(".tempDisplay").textContent=`${temp} °C`;
    document.querySelector(".humidityDisplay").textContent=`Humidity : ${humidity}`;
    document.querySelector(".descDisplay").textContent=description.toUpperCase();
    document.querySelector(".emojiDisplay").textContent=getWeatherEmoji(id);
}
function getWeatherEmoji(id){
    if(id>=200 && id<300){
        return '⛈️';
    }
    if(id>=300 && id<400){
        return '🌧️';
    }
    if(id>=500 && id<600){
        return '🌧️';
    }
    if(id>=600 && id<700){
        return '❄️';
    }
    if(id>=700 && id<800){
        return '🌫️';
    }
    if(id==800){
        return '☀️';
    }
    if(id>=801 && id<810){
        return '☁️';
    }
    else{
        return '❓';
    }


}
function displayError(error){
    document.querySelector(".cityDisplay").style.display = "none";
    document.querySelector(".tempDisplay").style.display = "none";
    document.querySelector(".humidityDisplay").style.display = "none";
    document.querySelector(".emojiDisplay").style.display = "none";
    document.querySelector(".descDisplay").style.display = "none";
    const errorDisplay=document.createElement("p");
    errorDisplay.textContent=error;
    errorDisplay.classList.add("errorDisplay");
    dataScreen.appendChild(errorDisplay);


}
backButton.addEventListener("click", () => {
    dataScreen.classList.remove("active");
    startScreen.classList.add("active");

    cityName.value = "";
});