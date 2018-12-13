
 const request = require('request')

// Main Monitoring API
function main(req, res, next) {
    var start = new Date();
    let options = { 
        method: req.method, 
        uri: 'https://tripzumi.com/' + req.path, 
    };

    request(options, function (error, response, body) {
        console.log('Request took:', new Date() - start, 'ms');
        return res.send(body); 
    });
}


module.exports = {
    main
};
