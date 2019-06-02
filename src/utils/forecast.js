const request = require('request')

const forecast = (lat, long, callback) =>{
    const url = 'https://api.darksky.net/forecast/350bd70fa08816dd87a59389de1a95a0/'+ lat +','+ long +'?units=si';

    request ({url, json: true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to service', undefined)
        }else if(body.error){
            callback('Unable to find location')
        }else{
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain. The temperature minimum for today is ' + body.daily.data[0].temperatureMin + ' degrees and the temperature maximun is '+ body.daily.data[0].temperatureMax + ' degrees.')
        }
    })
}


module.exports = forecast