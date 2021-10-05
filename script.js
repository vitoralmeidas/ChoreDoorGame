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

// Play Door
// It decreases the numClosedDoors variable
// It checks if the game-winning condition (numClosedDoors === 0) has been met and if so, calls a gameOver() function
const playDoor = () => {

}

// change the door image to bot, beach and outer space
doorImage1.onclick = () => {
    doorImage1.src = openDoor1;
}

doorImage2.onclick = () => {
    doorImage2.src = openDoor2;
}

doorImage3.onclick = () => {
    doorImage3.src = openDoor3;
}

 

randomChoreDoorGenerator();
