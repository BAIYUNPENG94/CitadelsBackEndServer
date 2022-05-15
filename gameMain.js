var MainSocketLayer = require('./gameControl/gameSocketLayer/mainSocketLayer');

var mainSoktTest = new MainSocketLayer();

mainSoktTest.startAServer();

//This is for test
//var GameLogicLayer = require('./gameControl/gameLogicLayer/gameLogicLayer');
//var gameLogicLayer = new GameLogicLayer();
//var gameLogicLayer2 = new GameLogicLayer();
//gameLogicLayer.createRoom = () => {
//    console.log('this functio has been overrided');
//}
//gameLogicLayer.createRoom();
//gameLogicLayer2.createRoom();