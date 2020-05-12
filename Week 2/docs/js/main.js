"use strict";
var Bubble = (function () {
    function Bubble() {
        this.createBubble();
        this.popBubble();
    }
    Bubble.prototype.createBubble = function () {
        var _this = this;
        var bubble = document.createElement("bubble");
        gameElement.appendChild(bubble);
        var x = randomPosition() + "vw";
        var y = randomPosition() + "vh";
        bubble.style.transform = "translate(" + x + ", " + y + ")";
        console.log("Blub... blub...");
        bubble.addEventListener("click", function () {
            bubble.remove();
            _this.popBubble();
        });
    };
    Bubble.prototype.popBubble = function () {
        console.log("Plop!");
    };
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        this.createFish();
        this.killFish();
    }
    Fish.prototype.createFish = function () {
        var _this = this;
        var fish = document.createElement("fish");
        gameElement.appendChild(fish);
        var x = randomPosition() + "vw";
        var y = randomPosition() + "vh";
        fish.style.transform = "translate(" + x + ", " + y + ")";
        var randomHue = Math.random() * 360;
        fish.style.filter = "hue-rotate(" + randomHue + "deg)";
        console.log("Fish was created!");
        fish.addEventListener("click", function () {
            fish.classList.add("dead");
            _this.killFish();
        });
    };
    Fish.prototype.killFish = function () {
        console.log("Aargh!");
    };
    return Fish;
}());
var gameElement = document.getElementsByTagName("game")[0];
function randomPosition() {
    return Math.floor(Math.random() * 100);
}
var Game = (function () {
    function Game() {
        console.log("Game was created!");
        for (var i = 0; i < 10; i++) {
            new Fish();
            new Bubble();
        }
        for (var i = 0; i < 50; i++) {
            new Plastic();
        }
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Plastic = (function () {
    function Plastic() {
        this.createPlastic();
    }
    Plastic.prototype.createPlastic = function () {
        var _this = this;
        var plastic = document.createElement("plastic");
        gameElement.appendChild(plastic);
        var x = randomPosition() + "vw";
        var y = randomPosition() + "vh";
        plastic.style.transform = "translate(" + x + ", " + y + ")";
        var randomSize = 10 + (Math.random() * 45);
        plastic.style.height = randomSize + "px";
        plastic.style.width = randomSize + "px";
        console.log("Plastic was created!");
        plastic.addEventListener("click", function () {
            plastic.remove();
            _this.removePlastic();
        });
    };
    Plastic.prototype.removePlastic = function () {
        console.log("Yay");
    };
    return Plastic;
}());
//# sourceMappingURL=main.js.map