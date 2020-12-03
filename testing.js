console.log("hello");

const axios = require('axios');

axios.get('https://www.balldontlie.io/api/v1/players/237')
    .then(function (response) {
    console.log(response);
    })