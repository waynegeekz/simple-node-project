const log = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a Listener
emitter.on('messageLogged', ( args ) => {
    console.log("Listener invoked!", args);
});


emitter.emit('messageLogged', {
    id : 1,
    url : 'http://'
});