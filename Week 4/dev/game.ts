/// <reference path="tree.ts"/>

class Game {
    
    private trees : Tree[] = []
    private bullets : Bullet[] = []

    public addBullet(bullet : Bullet){
        this.bullets.push(bullet)
    }
 
    constructor() {
        this.trees.push(new Tree(0, 100, this))
        this.trees.push(new Tree(0, 300, this))
        
        // start de game loop
        this.gameLoop()
    }
    
    private gameLoop(){
        // gebruik een for..of loop om de move functie van alle trees in de array aan te roepen
        for (let i = 0; i < this.trees.length; i++) {
            this.trees[i].move()
        }

        for (let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].move()
        }

        // animation
        requestAnimationFrame(() => this.gameLoop())
    }
} 

window.addEventListener("load", () => new Game())