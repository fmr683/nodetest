const request = require('request');

function gooleSearch() {
    var start = new Date();
    let options = { 
        method: "GET", 
        uri: 'http://localhost:3000/BOM-MAA/2018-12-20/Y/1a/N/N/', 
    };

    request(options, function (error, response, body) {
            
       // console.log('Request took:', new Date() - start, 'ms');
    });
}


setInterval(gooleSearch, 1000);