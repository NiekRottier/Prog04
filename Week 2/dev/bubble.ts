class Bubble {

    div: HTMLElement

    constructor() {
        this.createBubble()

        this.popBubble()
    }

    createBubble(){
        let bubble = document.createElement("bubble")
        gameElement.appendChild(bubble)
    
        let x = `${randomPosition()}vw`
        let y = `${randomPosition()}vh`
        bubble.style.transform = `translate(${x}, ${y})`

        console.log("Blub... blub...")

        bubble.addEventListener("click", () => {
            bubble.remove()
            this.popBubble()
        })
    }

    popBubble() {
        console.log("Plop!")
    }
}