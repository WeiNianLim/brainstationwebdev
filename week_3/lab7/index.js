const request = require('request');
const url = 'http://maps.googleapis.com/maps/api/geocode/json?address=455+granville+st+vancouver';

request(url, (error, response, body) => {
    console.log(body);
})

