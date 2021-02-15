const join = function join(roomName, firstName, lastName, tickSpeed) {
    const timer = ms => new Promise(res => setTimeout(res, ms))
    if (tickSpeed == undefined) {tickSpeed = 1}
    const roomInput = document.querySelector('#studentRoomName');
    const joinRoomButton = document.querySelector('#studentLoginButton');
    async function fillRoomName() {
        const roomNameLetters = roomName.split('');
        
        for (i = 0; i < roomNameLetters.length; i++) {
            roomInput.value += roomNameLetters[i]
            await timer(1000)
        }
    };
    fillRoomName();
};