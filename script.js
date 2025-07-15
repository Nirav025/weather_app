/*-------------------------- JS Code By Nirav -------------------------------*/



const apiKey = 'a41a4c848a4dcf234e801a61ee1182aa';


function getWeather() {

  const city = document.getElementById('cityInput').value.toLowerCase();


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
  
    .then(response => response.json())
    .then(data => {
      if(data.cod === "404") {

        document.getElementById("weatherResult").innerHTML = "City Not Found!";

        return;

      }

     
      

      const weatherHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />  
      `;
      document.getElementById("weatherResult").innerHTML = weatherHTML;

    })

    .catch(error => {
      document.getElementById("weatherResult").innerHTML = "Error Fetching Data.";
      console.log(error);
    });

}
