function makeMessage(id, messageType, anonUser, messagePeriods){
    return {
        id: id,
        messageType: messageType,
        anonUser: anonUser,
        messagePeriods: messagePeriods,
    };
}

var MESSAGETYPE = {
    FRIEND: 1,
    GROUP: 2,
    PAGE: 3,
    OTHER: 4,
};