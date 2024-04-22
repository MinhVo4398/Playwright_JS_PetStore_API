const fs = require('fs');

class CommonFunctions{
    
    getRandomNumber() {
        return Math.floor(Math.random() * (9999998822 -2222222) + 900000);
    }
}

module.exports = new CommonFunctions();