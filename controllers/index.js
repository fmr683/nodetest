
 const request = require('request')
 const Url = require('../helper/url');

// Main Monitoring API
function main(req, res, next) {
    let start = new Date();
    let url = '';
    var urlObj = new Url();
    let domain = 'https://tripzumi.com';

    if (req.path !== '') {
        url = 'flights/results?TripType=return&' + req.path + '&Adult=2&Child=2&Infant=0&Class=Y&SegCount=2';
    } 

    let options = { 
        method: req.method, 
        uri: domain + '/' + url, 
    };

    request(options, function (error, response, body) {
        //console.log('Request took:', new Date() - start, 'ms');
        //console.log(urlObj.updateUrl(body, domain));
       // console.log("********************************************************");
       // console.log(urlObj.updateUrl(body, domain));
       return res.send(body); 
    });
}


module.exports = {
    main
};