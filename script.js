// Global Variables

let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let openDoor1;
let openDoor2;
let openDoor3;
let numClosedDoors = 3;
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
let startButton = document.getElementById('start');
let currentlyPlaying = true;

// FUNCTIONS

// Random Function
// Generating images on the doors
const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    } else if (choreDoor === 2) {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
}


// isClicked 
// Adding this logic now protects your game from shortcut victories by making each closed door clickable only once.

const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
}


// Is boot? 
// Check if a door has the game-ending ChoreBot

const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
    
}


// Play Door
// It decreases the numClosedDoors variable
// It checks if the game-winning condition (numClosedDoors === 0) has been met and if so, calls a gameOver() function

const playDoor = (door) => {
    numClosedDoors --;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door) === true) {
        return gameOver();
    }
}



// Changing the door image to bot, beach and outer space
doorImage1.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}

doorImage2.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}

doorImage3.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3)
    }
}

startButton.onclick = () => {
    startRound();
}




// Start Round

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    currentlyPlaying = true;
    startButton.innerHTML = 'Good Luck!';
    randomChoreDoorGenerator();
}




// Gamer Over Function

const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = "You win! Play Again?";
    } else {
        return startButton.innerHTML = 'Game Over! Play Again?';
    }

    currentlyPlaying = false;
}



startRound();
