// events-example.js
var events = require('events');

// get an event emitter
var e = new events.EventEmitter();

// add some listeners on the 'hello' event
e.on('hello', function() { console.log('first listener'); });
e.on('hello', function() { console.log('second listener'); });

// fire the 'hello' event -- this will trigger the listeners
e.emit('hello');
