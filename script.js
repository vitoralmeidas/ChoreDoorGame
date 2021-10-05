let doorImage1 = document.getElementById("door1");
let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'

// change the door image to bot image
doorImage1.onclick = () => {
    doorImage1.src = botDoorPath;
}

