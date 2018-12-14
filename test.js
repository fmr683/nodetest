const request = require('request');

function gooleSearch() {
    var start = new Date();
    let options = { 
        method: "GET", 
        uri: 'http://dev7.sentrytest.tltid.com:3000/SegD0=ACR&SegO0=CMB&SegDt1=2019-05-30&SegDt0=2019-05-16', 
    };

    request(options, function (error, response, body) {
            
        console.log('Request took:', new Date() - start, 'ms');
    });
}


setInterval(gooleSearch, 1000);