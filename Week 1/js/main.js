//
// vis element
//

function randomPosition(direction){
    return Math.floor(Math.random() * 100) + direction;
}


function createFish(){
    let fish = document.createElement("fish");
    document.body.appendChild(fish);

    let x = randomPosition("vw");
    let y = randomPosition("vh");
    fish.style.transform = `translate(${x}, ${y})`;

    let randomHue = Math.random() * (360 - 1) + 1;
    fish.style.filter = `hue-rotate(${randomHue}deg)`;
}


//
// bubble element
//
function createBubble(){
    let bubble = document.createElement("bubble");
    document.body.appendChild(bubble);

    let x = randomPosition("vw");
    let y = randomPosition("vh");
    bubble.style.transform = `translate(${x}, ${y})`;
}

for (let i=0; i<100; i++){
    createBubble();
    createFish();
}