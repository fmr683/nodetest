const request = require('request');

function gooleSearch() {
    var start = new Date();
    let options = { 
        method: "GET", 
        uri: 'http://localhost:3000/nodejs', 
    };

    request(options, function (error, response, body) {
            
        console.log('Request took:', new Date() - start, 'ms');
    });
}


setInterval(gooleSearch, 1000);