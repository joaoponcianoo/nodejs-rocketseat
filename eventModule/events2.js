const { EventEmitter } = require('events')
const e = new EventEmitter()

// once, executa apenas uma vez
e.once('saySomething', (message) => {
    console.log("Opa!:", message) 
})

e.emit('saySomething', "jão")


