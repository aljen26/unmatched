

const canvas = document.getElementById("canvas");

canvas.width = 1337;
canvas.height = 742;

const playerBg1 = document.getElementById("player1");
const playerBg2 = document.getElementById("player2");
playerBg1.width = 1337/2;
playerBg1.height = 1337/2;

playerBg2.width = 1337/2;
playerBg2.height = 1337/2;

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log("You are connected too socket ID: "+socket.id);
});

socket.emit('custom-event', 10, 'Hi', {a: 'Aa'});

