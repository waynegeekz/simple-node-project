const EventEmitter = require('events');

let url = 'http://waynecomendador.com/';

class Logger extends EventEmitter{

    log( message ) {
        // SEND HTTP REQUEST
        console.log( message );
    
        //Raise an Event
        this.emit('messageLogged', {
            id : 1,
            url : 'http://'
        });
    }

}


module.exports = Logger; 