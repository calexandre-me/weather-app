const request = require('request');

const weatherUtil = (latitude, longitude, callback) => {

  const urlWeatherAPI = `http://api.weatherstack.com/current?access_key=0441e0e741a5d6c01d906f94f159de56&query=${latitude},${longitude.toString()}&units=m`;

  request({ url: urlWeatherAPI, json: true }, (error, response) => {
    const weatherInformation = {
      actualTime: undefined,
      icon: undefined,
      temperature: undefined,
      feelslike: undefined,
      windspeed: undefined,
      visibility: undefined,
      humidity: undefined,
      pressure: undefined,
      precipitation: undefined,
      description: undefined
    }
    
    if (error) {
      console.log("There was an issue. Check your internet connection.");
    }
    else if (response.body.error) {
      console.log("There was an error connecting to the API. Try again later.");
    }
    else {
      const currentDataInformation = response.body.current;
      const additionalInfo = response.body.location;
      const getTime_ = additionalInfo.localtime.split(' ')[1];

      console.log(currentDataInformation);
      const [weatherImage] = currentDataInformation.weather_icons;
      const [weatherDescribe] = currentDataInformation.weather_descriptions;
       
      weatherInformation.actualTime = Number(getTime_.split(':')[0]) >= 12 ? getTime_+' PM' : getTime_+' AM';
      weatherInformation.icon = weatherImage;
      weatherInformation.temperature = currentDataInformation.temperature;
      weatherInformation.feelslike = currentDataInformation.feelslike;
      weatherInformation.windspeed = currentDataInformation.wind_speed;
      weatherInformation.visibility = currentDataInformation.visibility;
      weatherInformation.humidity = currentDataInformation.humidity; 
      weatherInformation.pressure = currentDataInformation.pressure;
      weatherInformation.precipitation = currentDataInformation.precip;  
      weatherInformation.description = weatherDescribe;
    }
    callback(weatherInformation);
  });
}

module.exports = {weatherUtil};