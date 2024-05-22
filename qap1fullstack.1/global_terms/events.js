const EventEmitter = require('events'); 

// Creating an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Binding a listener to 'myEvent' event
eventEmitter.on('myEvent', () => {
  console.log('myEvent was emitted!!!!!! WOOHOOO!!!'); // Logging the event message
});

// Firing 'myEvent'
eventEmitter.emit('myEvent'); // 'Triggering' the event
