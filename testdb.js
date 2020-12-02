//hmm or should the require be in server.js with the other package importers.
const nba = require('nba-api-client');

nba.teamDetails({TeamID: 1610612745}).then(function(data) {
    console.log(data)
})

nba.getPlayerID("Lebron James");
