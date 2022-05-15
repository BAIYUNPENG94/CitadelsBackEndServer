const net = require('net');
var publicData = require('./publicData');

function toolBox() {

    var objStringParser = (obj) => {
        var objString = JSON.stringify(obj);
        return objString;
    }

    this.sendDataToClient = (dataObj, playerId) => {
        var dataString = objStringParser(dataObj);
        var targetSocketId = publicData.playerList[playerId].socketId;
        publicData.socketList[targetSocketId].write(dataString);
        console.log('feedback sent');
    }

    this.stringObjParser = (str) => {
        try {
            var stringObj = JSON.parse(str);
        } catch(e) {
            var pack = {
                type: 'ErrorString',
                reason: 'Received data can not be parsed to JSON string',
                content: str,
            }
            return pack;
        }
        return stringObj;
    }

    this.generateBasicFBPack = (isOK, playerId, content) => {
        var pack = {
            err      : isOK? 'no' : 'yes',
            playerId : playerId,
            content  : content,
        }
        return pack;
    }

}

module.exports = toolBox;