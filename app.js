const log = require('./logger');
const path = require('path');
const os = require('os');

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log(`TOTAL MEMORY: ${os.totalmem}`);
console.log(`FREE MEMORY: ${os.freemem}`);