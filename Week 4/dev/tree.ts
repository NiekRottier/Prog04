/// <reference path="chicken.ts" />

class Tree {
    
    public div: HTMLElement
    private x:number
    private y:number
    private width:number
    private height:number
    private speed:number

    private chickens : Chicken[] = []

    constructor(x:number, y:number, g:Game) {
        this.div = document.createElement("tree")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.div)
        
        this.speed = Math.random() * 4 + 1
        this.width = 414
        this.height = 86
        this.x = x
        this.y = y

        let chickenX = this.x + 10

        for (let i = 0; i < 4; i++) {
            this.chickens.push(new Chicken(chickenX, -70, this, g))
            chickenX += this.width/4
        }        
    }
    
    public move():void {
        this.x += this.speed
        if(this.x > window.innerWidth) this.x = -450
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

}