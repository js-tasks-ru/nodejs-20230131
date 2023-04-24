const socketIO = require('socket.io');
const socketRedis = require('socket.io-redis');

function socket(server) {
  const io = socketIO(server);

  io.adapter(socketRedis('redis://127.0.0.1:6379/1'));

  io.use((socket, next) => {
    console.log(socket.handshake.headers);
    next();
  });

  io.on('connection', socket => {
    console.log('connect', socket.id);

    socket.on('client_user_typing', isTyping => {
      console.log('client_user_typing', isTyping);
    });

    socket.on('client_user_message', message => {
      console.log('client_user_message', message);

      // socket.emit('server_user_message', message);
      // io.emit('server_user_message', message);
      socket.broadcast.emit('server_user_message', message);
    });

    socket.on('disconnect', () => {
      console.log('disconnect', socket.id);
    });
  });
}

module.exports = socket;
