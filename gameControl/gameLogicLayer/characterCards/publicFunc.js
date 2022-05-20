var cardHolder = require('../../toolBox/cardHolder')
var publicData = require('../../toolBox/publicData');
var ToolBox = require('../../toolBox/toolBox');

function charaPublicFuncs() {
    var toolBox = new ToolBox();

    this.initCharacter = (playerId) => {

        self = {

            id      : playerId,

            getCoins: (num) => {
                try {
                    publicData.playerListInGame[id].coinNum += num;
                } catch(err) {
                    return toolBox.generateBasicFBPack(false, id, err);
                }
                console.log(id + 'has chosen to take two coins.');
                return toolBox.generateBasicFBPack(false, id, 'OK');
            },

            serveCards: (num) => {
                var responsePack = {}
                try {
                    // TODO: Random take num cards, and add cards to pack function
                } catch(err) {
                    return toolBox.generateBasicFBPack(false, id, err);
                }
                return responsePack;
            },

            chooseOneArcCard: (data) => {
                try{
                    publicData.playerListInGame[id].cardsInHand.push(data);
                } catch(err) {
                    return toolBox.generateBasicFBPack(false, id, err);
                }
                console.log(id + 'has chosen one card.');
                return toolBox.generateBasicFBPack(true, id, 'OK');
            },

            buildArchetechture: (data) => {
                try{
                    publicData.playerListInGame[id].archetecture.push(data);
                } catch(err) {
                    return toolBox.generateBasicFBPack(false, id, err);
                }
                console.log(id + 'has build:' + data);
                return toolBox.generateBasicFBPack(true, id, 'OK');
            },

            tax: () => {
                var interest = ''
                for (var card in cardHolder.characterCards) {
                    if (card.cardName === publicData.playerListInGame[playerId].character){
                        interest = card.interestArch;
                    }
                    if (interest != '' && interest != 'none') {
                        if (publicData.playerListInGame[playerId].cardsInHand != []) {
                            publicData.playerListInGame[playerId].coinNum +=
                                publicData.playerListInGame[playerId].cardsInHand.length;
                            console.log(playerId, 'has collected tax');
                        }
                    }
                    console.log(playerId, 'can not collect tax');
                }
            },
        };

        return self;
    }
}

module.exports = charaPublicFuncs;