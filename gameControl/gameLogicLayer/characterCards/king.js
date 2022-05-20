var PublicFunc = require('./publicFunc');
var publicData = require('../../toolBox/publicData');
var cardHolder    = require('../toolBox/cardHolder');
const toolBox = require('../../toolBox/toolBox');

function king() {
    this.initKing = (playerId) => {
        var publicFunc = new PublicFunc();
        var self = publicFunc.initCharacter(playerId);

        self.passiveSkill = () => {
            //publicData.roomInfo.startIndex = 
        }

        return self;
    }
}