///////////////////////////////// Selectors ////////////////////////////
// API Variables
const apiKey = "00ef83945ac64f890995ea9f7422b1b0";
const locationName = "";




///////////////////////////////// API ////////////////////////////
function geoLocation () {
  navigator.geolocation.getCurrentPosition((geo) => {
    let {latitude, longitude} = geo.coords;

    fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}")
  })
}

let currentWeather = {
  'apiKey': "00ef83945ac64f890995ea9f7422b1b0",
  fetchWeather:  function () {
    fetch ("api.openweathermap.org/data/2.5/weather?q=" 
      + locationName 
      + "&appid=" 
      + this.apiKey
      + "&cnt=7"
      + "&units=imperial"
    )
    .then((response) => response.json())
    };
  displayWeather: function(data) {  
    const cityName = data;
    const icon =
    const descriptio = data.weather
    const speed = data.wind;
  }

};

let sevenDayWeather = {
  'apiKey': "00ef83945ac64f890995ea9f7422b1b0",
  fetchWeather:  function () {
    fetch ("api.openweathermap.org/data/2.5/weather?q=" 
      + locationName 
      + "&appid=" 
      + this.apiKey
      + "&cnt=7"
      + "&units=imperial"
    )
    .then((response) => response.json())
    };
  displayWeather: function(data) {  
    const cityName = data;
    const icon =
    const descriptio = data.weather
    const speed = data.wind;
  }

};


///////////////////////////////// Local Storage ////////////////////////////



