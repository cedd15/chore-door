let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

//starts new game once game is over
let startButton = document.getElementById('start');

let currentlyPlaying = true;

//imgs of each door
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";

//number of unopened doors
let numClosedDoors = 3;

//assigned doorImage to opendoors
let openDoor1;
let openDoor2;
let openDoor3;

//img of a closed door
const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";


const isBot = (door) => {
    //checks if bot is in a door
    return door.src === botDoorPath ? true : false;
}

const isClicked = (door) => {
    //checks if a door is clicked
    //prevents the play from clicking any unopened doors when game is over
    return door.src == closedDoorPath ? false : true;
}

const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) { 
        gameOver('win');
}   else if (isBot(door)) { 
    //if bot is found, game is over 
    //prevents the player from clicking any unopened doors
        gameOver('lose');
}
}

//assigns images to random doors
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
            openDoor1 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = spaceDoorPath;
    }   else if (choreDoor === 1) {
            openDoor2 = botDoorPath;
            openDoor1 = beachDoorPath;
            openDoor3 = spaceDoorPath;
    }
        else {
            openDoor3 = botDoorPath;
            openDoor1 = beachDoorPath;
            openDoor2 = spaceDoorPath;
    }
}

doorImage1.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
}
}

doorImage2.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
}
}

doorImage3.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
}
}

//this function resets everything
const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;

    numClosedDoors = 3;
    startButton.innerHTML = 'Good Luck!';
    currentlyPlaying = true;

    randomChoreDoorGenerator();
}

//this is a button that calls the startRound() function
startButton.onclick = () => {
    //if statement where the condition checks if the currentlyPlaying variable is false so that a player cannot reset the game mid-round
    if (!currentlyPlaying) {
    startRound();
    }
}


const gameOver = (status) => {
    if (status === 'win') { 
        startButton.innerHTML = 'You win! Play again?' 
}   else {
        startButton.innerHTML = 'Game over! Play again?';
}
    currentlyPlaying = false;
}

//new game
startRound();