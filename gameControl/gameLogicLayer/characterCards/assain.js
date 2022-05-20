var PublicFunc = require('./publicFunc');
var publicData = require('../../toolBox/publicData');
var cardHolder    = require('../toolBox/cardHolder');
const toolBox = require('../../toolBox/toolBox');

function assain() {

    this.initAssain = (playerId) => {
        var publicFunc = new PublicFunc();
        var self = publicFunc.initCharacter(playerId);

        /*
         * object data contains:
         * {
         *   characterName
         * }
         */
        self.kill = (data) => {
            try {
                cardHolder[data.characterName].status.push('killed');
            } catch(err) {
                return toolBox.generateBasicFBPack(false, self.id, err);
            }
            console.log(playerId + 'has killed' + data.characterName);
            return toolBox.generateBasicFBPack(false, self.id, 'OK');
        }

        return self;
    }
}

module.exports = assain;