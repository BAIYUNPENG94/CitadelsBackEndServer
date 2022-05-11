var MainSocketLayer = require('./gameControl/gameSocketLayer/mainSocketLayer');

var mainSoktTest = new MainSocketLayer();

mainSoktTest.startAServer();

//This is for test
//var GameLogicLayer = require('./gameControl/gameLogicLayer/gameLogicLayer');
//var gameLogicLayer = new GameLogicLayer();
//console.log(gameLogicLayer.serveCharaCards('x', 'x'));