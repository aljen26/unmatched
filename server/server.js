const io = require('socket.io')(3000, {
    cors: {
        origin: ["http://127.0.0.1:8080"],
    },
});

io.on('connection', socket => {
    socket.on('custom-event', (number, msg, obj) => {
        console.log(number, msg, obj);
    })
})