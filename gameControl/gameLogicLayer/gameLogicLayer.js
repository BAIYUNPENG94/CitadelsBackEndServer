const net=  require('net')
var ToolBox       = require('../toolBox/toolBox');
var publicData    = require('../toolBox/publicData');
var cardHolder    = require('../toolBox/cardHolder');

function gameLogicLayer() {

    var PlayerInfo = (id, name, queue) => {
        var player = {
            playerId    : id,
            playerName  : name,
            queue : queue,
        }
        return player;
    }

    /* Data contains {command:'CR', roomKey, numOfPlayers, hostName}*/
    this.createRoom = (player, data) => {
        publicData.roomInfo.hostName         = data.hostName;
        publicData.roomInfo.roomKey          = data.roomKey;
        publicData.roomInfo.numOfPlayers     = parseInt(data.numOfPlayers);
        publicData.roomInfo.hostPlayerId     = player.playerId;
        publicData.currentStatus             = 'AllSet';
        var playerInfo = PlayerInfo(player.playerId, data.hostName, 0);
        publicData.roomInfo.playerList.push(player.playerId);
        publicData.roomInfo.playerQueue[0] = playerInfo;
        playerInfo.queue = 0;

        /* For optimization, future here need to be added some initialize part 
         * ex. Initialize other game logic function parts...
         */

        var responsePack = {
            content    : 'Room has already be created [AllSet]',
            roomHost   : publicData.roomInfo.hostPlayerId,
            roomHoster : publicData.roomInfo.hostName,
            roomKey    : publicData.roomInfo.roomKey,
        }
        return responsePack;
    }

    /* Data cointains {command:'JR', roomKey, playerName} */
    this.joinRoom = (player, data) => {
        if (data.roomKey === publicData.roomInfo.roomKey) {
            var queue = publicData.roomInfo.playerList.length;
            if (queue < publicData.roomInfo.numOfPlayers) {
                var playerInfo = PlayerInfo(player.playerId, data.name, queue);
                publicData.roomInfo.playerList.push(player.playerId);
                publicData.roomInfo.playerQueue[queue] = playerInfo;
                playerInfo.queue = queue;
                var responsePack = {
                    error   : 'no',
                    content : 'Successfully join the room',
                }
            } else {
                var responsePack = {
                    error   : 'yes',
                    content : 'Cannot join the room(player number over)',
                }
            }
        } else {
            var responsePack = {
                error   : 'yes',
                content : 'roomKey not match[Error]',
            }
        }
        return responsePack;
    }

    /* Data contains {command:'SCC'} */
    this.serveCharaCards = (player, data) => {
        var cardsPack = [];
        for (var card in cardHolder.characterCards) {
            if (!cardHolder.characterCards[card].abandoned) {
                cardsPack.push(cardHolder.characterCards[card].cardName);
            }
        }
        var responsePack = {
            error: 'no',
            cards: cardsPack,
        }
        return responsePack;
    }

    /* Data contains {command:'CCC', chosenChar} */
    this.chooseCharaCard = (player, data) => {
        for (var card in cardHolder.characterCards) {
            if (cardHolder.characterCards[card].cardName === data.chosenChar) {
                cardHolder.characterCards[card].selected = true;
                cardHolder.characterCards[card].playerId = player.playerId;
                publicData.playerListInGame[player.playerId].character = data.chosenChar;
                var responsePack = {
                    error: 'no',
                    content: 'chosen Successful',
                }
                return responsePack;
            }
        }
        var responsePack = {
            error: 'yes',
            content: 'does not have this card',
        }
        return responsePack;
    }
}

module.exports = gameLogicLayer;