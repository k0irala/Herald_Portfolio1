
/**


* Student Name: Gaurav Koirala


* Student ID: 2408598


*/


async function fetchData() {
  const weather = await fetch(
    // fetching data from api
    "https://api.openweathermap.org/data/2.5/weather?q=Haldia&lat=57&lon=-2.15&appid=ac911e4e30386032b6d32a5c99255190&units=metric"
  );
  //declaring data to store json object
  const data = await weather.json();
  //declaring various variables for specific id
  const city = document.getElementById("city");
  const condition = document.getElementById("condition");
  const temperature = document.getElementById("temperature");
  const pressure = document.getElementById("pressure");
  const windSpeed = document.getElementById("wind-speed");
  const humidity = document.getElementById("humidity");
  const time = document.getElementById("date-time");
  //to change timezone to actual date and time using Date() object
  let timemap= data.timezone;
    const times = Math.floor(Date.now() / 1000) + timemap;
    const datetoday = new Date(times * 1000);
    const DateTime = datetoday.toLocaleString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "UTC",
    });
    time.innerHTML = DateTime;
  const code = data.weather[0].icon;
  document.getElementById(
    "icon"
  ).src = `https://openweathermap.org/img/wn/${code}@2x.png`;
  city.innerHTML =
    "<h1>" + data.name + " <sup> " + data.sys.country + " </sup> " + "</h1>";
  condition.innerHTML =
    "<h1>Weather Condition : " +
    data.weather[0].main +
    "," +
    data.weather[0].description +
    "</h1>";
  temperature.innerHTML =
    "<h1>Temperature: " + Math.round(data.main.temp) + "&deg;C</h1>";
  pressure.innerHTML = "<h1>Pressure: " + data.main.pressure + "Pa</h1>";
  humidity.innerHTML = "<h1>Humidity: " + data.main.humidity + "%</h1>";
  windSpeed.innerHTML = "<h1>Wind Speed: " + data.wind.speed + "m/s</h1>";
}
fetchData();

const btn = document.getElementById("btn");
const searchValue = document.getElementById("input-field");

async function searchData(inputCity) {
  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=ac911e4e30386032b6d32a5c99255190&units=metric`
  );
  //to check if data exists in API
  if (weather.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".hide").style.display = "none";
  } else {
    const data = await weather.json();
    const city = document.getElementById("city");
    const condition = document.getElementById("condition");
    const temperature = document.getElementById("temperature");
    const pressure = document.getElementById("pressure");
    const windSpeed = document.getElementById("wind-speed");
    const humidity = document.getElementById("humidity");
    const time = document.getElementById("date-time");
    let timemap= data.timezone;
    const times = Math.floor(Date.now() / 1000) + timemap;
    const datetoday = new Date(times * 1000);

    const DateTime = datetoday.toLocaleString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "UTC",
    });
    time.innerHTML = DateTime;
    const code = data.weather[0].icon;
    document.getElementById(
      "icon"
    ).src = `https://openweathermap.org/img/wn/${code}@2x.png`;
    city.innerHTML =
      "<h1>" + data.name + " <sup> " + data.sys.country + " </sup> " + "</h1>";
    condition.innerHTML =
      "<h1>Weather Condition : " +
      data.weather[0].main +
      "," +
      data.weather[0].description +
      "</h1>";
    temperature.innerHTML =
      "<h1>Temperature: " + Math.round(data.main.temp) + "&deg;C</h1>";
    pressure.innerHTML = "<h1>Pressure: " + data.main.pressure + "Pa</h1>";
    humidity.innerHTML = "<h1>Humidity: " + data.main.humidity + "%</h1>";
    windSpeed.innerHTML = "<h1>Wind Speed: " + data.wind.speed + "m/s</h1>";
    console.log(data);
    document.querySelector(".error").style.display = "none";
    document.querySelector(".hide").style.display = "block";
  }
}
btn.addEventListener("keypress", (event) => {
  if(searchValue.value==""){
    alert("Enter a city")
    document.querySelector(".hide").style.display = "none"; 
  }
  }
  searchData(searchValue.value);
});
