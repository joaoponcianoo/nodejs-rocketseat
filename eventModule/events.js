const { EventEmitter } = require('events')
const e = new EventEmitter()


// on sempre ouvindo
e.on('saySomething', (message) => {
    console.log("Opa!:", message)
})

e.emit('saySomething', "jão")


