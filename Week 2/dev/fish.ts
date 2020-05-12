class Fish {

    div: HTMLElement
    
    constructor() {
        this.createFish()

        this.killFish()        
    }

    createFish(){
        let fish = document.createElement("fish")
        gameElement.appendChild(fish)
    
        let x = `${randomPosition()}vw`
        let y = `${randomPosition()}vh`
        fish.style.transform = `translate(${x}, ${y})`
    
        let randomHue = Math.random() * 360
        fish.style.filter = `hue-rotate(${randomHue}deg)`

        console.log("Fish was created!")

        fish.addEventListener("click", () => {
            fish.classList.add("dead")
            this.killFish()
        })
    }

    killFish(){
        console.log("Aargh!")
    }
}