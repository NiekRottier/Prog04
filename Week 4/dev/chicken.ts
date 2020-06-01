/// <reference path="tree.ts"/>

class Chicken {
    
    public div: HTMLElement
    private x:number
    private y:number
    private width:number
    private height:number

    private gun : Gun

    public getDiv() {
        return this.div
    }

    constructor(x:number, y:number, tree:Tree, g:Game) {
        this.div = document.createElement("bird")
        tree.div.appendChild(this.div)
                
        this.x = x
        this.y = y
        this.width = 67
        this.height = 110
        
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`

        this.div.addEventListener("click", () => {
            // If there is a gun
            if (this.gun) {
                this.gun.fire()
            } else {
                this.gun = new Gun(this, g)
            }
        })
    }

}