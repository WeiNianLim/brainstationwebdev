const request = require("request");
const url = "https://www.google.ca/search?q=brainstation";

request(url, (error, response, body) => {
    console.log(body);
});