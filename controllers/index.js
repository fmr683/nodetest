
 const request = require('request')

// Main Monitoring API
function main(req, res, next) {
    var start = new Date();
    let options = { 
        method: req.method, 
        uri: 'https://www.google.com/search?hl=en&q=' + req.path + '&btnG=Google+Search', 
    };

    request(options, function (error, response, body) {
        console.log('Request took:', new Date() - start, 'ms');
        return res.send(body); 
    });
}


module.exports = {
    main
};