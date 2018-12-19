
 const request = require('request')
 const Url = require('../helper/url');
 const fs = require('fs');

// Main Monitoring API
function main(req, res, next) {
    let start = new Date();
    let url = '';
    var urlObj = new Url();
    let domain = 'https://tripzumi.com';

    let currentDate = new Date()
    let day = currentDate.getDate()
    let month = currentDate.getMonth() + 1
    let year = currentDate.getFullYear()

    if (req.path !== '') {
        url = req.path;
    } 

    let options = { 
        method: req.method,
        uri: domain + url, 
    };

    request(options, function (error, response, body) {

        let responseTime = String(new Date() - start);
        let logData = '---URL ' + req.path + ' \n';
        logData += `Request took: ${responseTime}ms--- \n\n` ;
       // console.log(body);
        fs.appendFile("./logs/" + day + "-" + month + "-" + year + '.txt', logData, function (err) {
           // console.log(body);
            //console.log("***************");
           // console.log();
           return res.send(urlObj.updateUrl(body, domain)); 
        });

       // console.log(body);
       // console.log('Request took:', responseTime , 'ms');
        //console.log(urlObj.updateUrl(body, domain));
        //console.log("********************************************************");
      
      
    });
}


module.exports = {
    main
};
