let join = [];

join.run = function(room) {
    join.room(room)
}

join.room = function join(roomName) {
    const roomInput = document.querySelector('#studentRoomName');
    const joinRoomButton = document.querySelector('#studentLoginButton');
    roomInput.value = roomName;
    roomInput.setAttribute('value', roomName)
};

join.name = function(firstName, lastName) {
    const input = document.querySelector('#student-name-input');
    const button = document.querySelector('#submit-name-button');
    const name = lastName + ', ' + firstName;
    input.value = name;
};