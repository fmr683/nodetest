'use strict' 

module.exports = class Url { 

   // constructor 
   constructor() { 

   } 

   /*
    Pre: none
    @param:
        url: string
    return domain replaced URL
   */
    updateUrl(url, domain) { 
        let urlObj = url;
        return urlObj.replace('="/', '="'+ domain + '/'); 
    } 
} 