module.exports = {
    /* 
     * key: socketId
     * value: socket
     */
    socketList : {},
    /*
     * key: playerId
     * value: {
     *   socketId,
     *   playerId,
     * }
     */
    playerList : {},
    /*
     * key: playerId
     * value: {
     *   character,
     *   coinNum,
     *   archetecture: [],
     *   cardsInHand: [],
     * }
     */
    playerListInGame : {},
    currentStatus: 'NoRoom',
    command: {
        Test              : 'T',
        CreateRoom        : 'CR',
        JoinRoom          : 'JR',
        StartGame         : 'SG',
		ServeCharaCards   : 'SCC',
        ChooseCharaCard   : 'CCC',
    },
    playerChoice: {
        TakeCard     : 'TC',
        TakeMoney    : 'TM',
    },
    roomInfo: {
        hostName     : "",
        roomKey      : "",
        hostPlayerId : 0,
        numOfPlayers : 0,
        playerQueue  : {},
        playerList   : [],
        startIndex   : 0,
    },
}

/**
 * Now, 1 publicData is only for 1 room
 * All game status:
 * 1. NoRoom: Only 'CreateRoom' command is avilable
 * 2. Allset: Room created, only 'StartGame' command is avilable
 * 3. Ongoing: Game has been started, all game procedure command is avilable
 */