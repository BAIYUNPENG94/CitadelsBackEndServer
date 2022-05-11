const net = require('net');
var GameLogicLayer = require('../gameLogicLayer/gameLogicLayer');
const publicData = require('../toolBox/publicData');

function dataComuLayer() {

    var gameLogicLayer = new GameLogicLayer();

    this.commandDeliver = (player, data) => {
        var feedBack = {};

        switch (data.command) {
            case 'test':
                feedBack.playerId = player.playerId;
                feedBack.data = 'Server has received your test command';
                break;
            case publicData.command.CreateRoom:
                feedBack = createRoom(player, data);
                break;
            case publicData.command.JoinRoom:
                feedBack = joinRoom(player, data);
                break;
            case publicData.command.StartGame:
                feedBack = startGame(player, data);
                break;
            case publicData.command.serveCharaCards:
                feedBack = serveCharaCards(player, data);
            case publicData.command.ChooseCharaCard:
                feedBack = chooseCharaCard(player, data);
                break;
        }

        return feedBack;
    }

    var createRoom = (player, data) => {
        var responsePack = gameLogicLayer.createRoom(player, data);
        return responsePack;
    }

    var joinRoom = (player, data) => {
        var responsePack = gameLogicLayer.joinRoom(player, data);
        return responsePack;
    }

    var startGame = (player, data) => {

    }

    var serveCharaCards = (player, data) => {
        var responsePack = gameLogicLayer.serveCharaCards(player, data);
        return responsePack;
    }

    var chooseCharaCard = (player, data) => {
        var responsePack = gameLogicLayer.chooseCharaCard(player, data);
        return responsePack;
    }
}

module.exports = dataComuLayer;