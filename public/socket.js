const socket = io();

const objectDisplay = document.getElementById('object');

socket.on('obj', (data) => {
    console.log(data);
    objectDisplay.innerHTML = `${data}`;
});