class Plastic {

    div: HTMLElement

    constructor(){
        this.createPlastic()
    }

    createPlastic(){
        let plastic = document.createElement("plastic")
        gameElement.appendChild(plastic)
    
        let x = `${randomPosition()}vw`
        let y = `${randomPosition()}vh`
        plastic.style.transform = `translate(${x}, ${y})`
        
        let randomSize : number = 10 + (Math.random() * 45)
        plastic.style.height = `${randomSize}px`
        plastic.style.width = `${randomSize}px`

        console.log("Plastic was created!")

        plastic.addEventListener("click", () => {
            plastic.remove()
            this.removePlastic()
        })
    }

    removePlastic(){
        console.log("Yay")
    }
}