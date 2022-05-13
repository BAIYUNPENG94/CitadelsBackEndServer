const net = require('net');
var DataComuLayer = require('../dataComuLayer/dataComuLayer');
var ToolBox       = require('../toolBox/toolBox');
var publicData    = require('../toolBox/publicData');

function socketLayer() {

    var dataComuLayer = new DataComuLayer();
    var toolBox       = new ToolBox();

    this.startAServer = () => {
        var server = initializeServer();
        server.listen(8888, '127.0.0.1');
    }

    var initializeServer = () => {
        var server = net.createServer((socket) => {

            onNewSocket(socket);
            socket.player = createPlayer(socket.id);

            socket.on('data', (data) => {
                dataParseEntrance(socket.player, data);
            })

            socket.on('close', (hadError) => {
                if (hadError)
                    console.log("One user has been disconnected by some error");
                delete publicData.socketList[socket.id];
                delete publicData.playerList[socket.player.playerId];
                console.log("One user disconnected");
            })

        });
        return server
    }

    var onNewSocket = (socket) => {
        socket.id = Math.random();
        publicData.socketList[socket.id] = socket;
    }

    var createPlayer = (socketId) => {
        var player = {
            socketId  : socketId,
            playerId  : String(socketId).slice(2, 7),
            character : 'none',
        }
        publicData.playerList[player.playerId] = player;
        return player;
    }

    var dataParseEntrance = (player, data) => {
        var parsedData = toolBox.stringObjParser(data);
        console.log('001 receice command:', parsedData);
        var feedBack = dataComuLayer.commandDeliver(player, parsedData);
        // Has problem, need fix
        if (Object.keys(feedBack).length === 0) {
            feedback = {
                playerId: player.playerId,
                data: 'none',
            }
        }
        console.log('002 receice feedback about to send:', feedBack);
        toolBox.sendDataToClient(feedBack, player.playerId);
    }
};

module.exports = socketLayer;