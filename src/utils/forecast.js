const request = require('request')

const forecast = (latitude, longitude,  callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=c37989c5786c6c112fca12e3eef185ad&query=' + latitude + ',' + longitude+ '&units=m'

    request({url, json: true}, (error, { body}) => {
        if (error) {
            callback('Unable to connect to weather service!');
        } else if (body.error) {
            callback('Unable to find location');
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.');
        };

    })
}

module.exports = forecast;