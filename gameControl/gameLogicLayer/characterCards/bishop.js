var PublicFunc = require('./publicFunc');
var publicData = require('../../toolBox/publicData');
var cardHolder    = require('../toolBox/cardHolder');
const toolBox = require('../../toolBox/toolBox');

function bishop() {

    this.initBishop = (playerId) => {
        var publicFunc = new PublicFunc();
        var self = publicFunc.initCharacter(playerId);

        return self;
    }
}

module.exports = bishop;