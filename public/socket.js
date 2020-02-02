const socket = io();

const objectDisplay = document.getElementById('object');

let temp = " ";

socket.on('obj', (data) => {
    console.log(data);
    objectDisplay.innerHTML = `${data}`;


    if (temp != data){
        temp = data;
        let audio = new SpeechSynthesisUtterance(data);
        window.speechSynthesis.speak(audio);
    }
    
});