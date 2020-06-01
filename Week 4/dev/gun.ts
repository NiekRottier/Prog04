/// <reference path="chicken.ts"/>

class Gun {
    
    public div: HTMLElement
    private x:number
    private y:number

    private game : Game

    public getX() : number {
        return this.x
    }

    public getY() : number {
        return this.y
    }

    constructor(chicken:Chicken, g:Game) {
        this.div = document.createElement("gun")
        chicken.div.appendChild(this.div)

        this.x = 20
        this.y = 40
        this.game = g
        
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)"

        this.fire()
    }

    public fire():void {
        // de globale positie van de gun kan je uitrekenen met getBoundingRect
        let rect:ClientRect = this.div.getBoundingClientRect()
        console.log("plaats een kogel op " + rect.left + " , " + rect.top)

        let bullet = new Bullet(rect.left, rect.top+30)
        this.game.addBullet(bullet)
    }

}