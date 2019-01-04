let socket = io();

// socket.on('connect', () => {
//     console.log('Connected to server');
// });

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Zak',
        text: 'Yeah that is fine.'
    });
});

// socket.on('disconnect', () => {
//     console.log('Disconnected from server');
// });

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
});