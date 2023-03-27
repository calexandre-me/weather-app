const request = require('request');

const forecast = (latitude, longitude, callback) => {

  const urlWeatherAPI = `http://api.weatherstack.com/current?access_key=0441e0e741a5d6c01d906f94f159de56&query=${latitude},${longitude.toString()}&units=m`;

  request({ url: urlWeatherAPI, json: true }, (error, response) => {
    const weatherInformation = {
      description: undefined,
      temperature: undefined,
      feelslike: undefined,
      windspeed: undefined,
      visibility: undefined,
      humidity: undefined     
    }
    
    if (error) {
      console.log("There was an issue. Check your internet connection.");
    }
    else if (response.body.error) {
      console.log("There was an error connecting to the API. Try again later.");
    }
    else {
      const currentDataInformation = response.body.current;
      console.log(currentDataInformation);
      const [weatherDescribe] = currentDataInformation.weather_descriptions;
      
      weatherInformation.description = weatherDescribe;
      weatherInformation.temperature = currentDataInformation.temperature;
      weatherInformation.feelslike = currentDataInformation.feelslike;
      weatherInformation.windspeed = currentDataInformation.wind_speed;
      weatherInformation.visibility = currentDataInformation.visibility;
      weatherInformation.humidity = currentDataInformation.humidity;      
    }
    callback(weatherInformation);
  });
}

module.exports = { forecast: forecast }