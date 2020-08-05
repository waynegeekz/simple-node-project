const log = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a Listener
emitter.on('messageLogged', function() {
    console.log("Listener invoked!")
});


emitter.emit('messageLogged');