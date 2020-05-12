
// GLOBALS

let gameElement = document.getElementsByTagName("game")[0]

function randomPosition(){
    return Math.floor(Math.random() * 100)
}


class Game {
        
    constructor() {
        console.log("Game was created!")
        for (let i = 0; i < 10; i++) {
            new Fish()
            new Bubble()
        }
        for (let i = 0; i < 50; i++) {
            new Plastic()
        }
        
    }
} 


window.addEventListener("load", () => new Game())