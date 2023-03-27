const request = require('request');

const geoUtil = function (address, callback){
  const urlGeoAPI = `https://api.geoapify.com/v1/geocode/search?text=${address}&lang=en&limit=1&type=city&format=json&apiKey=ecc7d1ab41b44aab8e405708c2e75ba8`;

request({url: urlGeoAPI, json:true}, (error, response)=>{
  if(error){
    callback('Unable to connect to the Location Server! Please check your internet connection!', undefined);
  }
  else if(response.body.results.length == 0){
    callback('The location you gave is incorrect.', undefined)
  }
  else{
    const longitude = response.body.results[0].lon;
    const latitude = response.body.results[0].lat;

    callback(undefined, { latitude, longitude } );
  }
});
  
}

module.exports = {geoUtil}