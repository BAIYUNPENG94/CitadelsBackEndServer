const net = require('net');

const server = net.createServer((socket) => {
    console.log("connection");
    socket.write("server got your connection");
    socket.on("data", (data) => {
        console.log(data.toString());
    })
})

server.listen(8888, '127.0.0.1');