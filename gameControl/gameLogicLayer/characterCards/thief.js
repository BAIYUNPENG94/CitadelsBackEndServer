var PublicFunc = require('./publicFunc');
var publicData = require('../../toolBox/publicData');
var cardHolder    = require('../toolBox/cardHolder');
const toolBox = require('../../toolBox/toolBox');

function thief() {

    this.initThief = (playerId) => {
        var publicFunc = new PublicFunc();
        var self = publicFunc.initCharacter(playerId);

        /*
         * object data contains:
         * {
         *   characterName
         * }
         */
        self.steal = (data) => {
            try {
                cardHolder[data.characterName].status.push('stealed');
            } catch(err) {
                return toolBox.generateBasicFBPack(false, self.id, err);
            }
            console.log(playerId + 'has stealed' + data.characterName);
            return toolBox.generateBasicFBPack(false, self.id, 'OK');
        }

        return self;
    }
}

module.exports = thief;