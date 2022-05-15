var publicData = require('../../toolBox/publicData');
var ToolBox = require('../../toolBox/toolBox');

function charaPublicFuncs() {
    var toolBox = new ToolBox();

    this.initCharacter = (playerId) => {

        self = {

            getCoins: (coinsN) => {
                try {
                    publicData.playerListInGame[playerId].coinNum += coinsN;
                } catch(err) {
                    return toolBox.generateBasicFBPack(false, playerId, err);
                }
                console.log(playerId + 'has chosen to take two coins.');
                return toolBox.generateBasicFBPack(false, playerId, 'OK');
            },

            serveCards: (num) => {
                var responsePack = {}
                try {
                    // TODO: Random take num cards, and add cards to pack function
                } catch(err) {
                    return toolBox.generateBasicFBPack(false, playerId, err);
                }
                return responsePack;
            },

            chooseOneCard: (data) => {
                try{
                    publicData.playerListInGame[playerId].cardsInHand.push(data);
                } catch(err) {
                    return toolBox.generateBasicFBPack(false, playerId, err);
                }
                console.log(playerId + 'has chosen one card.');
                return toolBox.generateBasicFBPack(true, playerId, 'OK');
            }
        };

        return self;
    }
}