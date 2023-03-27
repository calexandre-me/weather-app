const express = require('express');
const weatherUtil = require('../utils/forecast');
const geoUtil = require('../utils/geocode');

const weatherRouter = express.Router();

weatherRouter.get('/secure-1234-weather-info-api-get-info', (req, res) => {
    const userQuery = req.query;
    console.log(userQuery);
    
    if(Object.keys(userQuery).length == 0){
        return res.send({
                error: "No query were provided"
        })
    }
    else{
        if(!userQuery.address){
            return res.send({
                error: "The key <ADDRESS> is required to process the command."
            })
        }
    }
    
    geoUtil.geoUtil(userQuery.address, (error, {latitude, longitude} = {})=>{
        if(!error){
          return weatherUtil.weatherUtil(latitude, longitude, (weatherUtilData)=>{
            res.send(JSON.stringify(weatherUtilData));
          })
        }
        return res.send({
            error: `${error}`
        })
    })
});

module.exports = weatherRouter;