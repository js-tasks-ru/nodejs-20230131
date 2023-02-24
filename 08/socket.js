const socketIO = require('socket.io');

function socket(server) {
  const io = socketIO(server);

  io.use((request, next) => {
    const handshake = request.handshake;

    console.log(handshake.headers['user-agent']);

    next();
  });

  io.on('connection', socket => {
    console.log('connection', socket.id);

    socket.on('client_user_message', (msg) => {
      console.log('client_user_message', msg);

      io.emit('welcome', { message: 'welcome to the server' });
    });

    socket.on('disconnect', () => {
      console.log('disconnect', socket.id);
    });
  });
}

module.exports = socket;
