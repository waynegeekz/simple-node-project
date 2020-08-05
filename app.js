const log = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');

fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});
