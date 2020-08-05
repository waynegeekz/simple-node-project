const Logger = require('./logger');
const logger = new Logger();

// Register a Listener
logger.on('messageLogged', ( args ) => {
    console.log("Listener invoked!", args);
});


logger.log('message');