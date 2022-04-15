const EventsEmitter=require('events');

const customEmitter=new EventsEmitter();

customEmitter.on('response', (name, id)=>{
    console.log(`Response Recieved ${name}, ${id}`);
})

customEmitter.emit('response', "hasnain", '123');

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it