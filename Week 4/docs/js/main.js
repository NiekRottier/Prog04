"use strict";
var Chicken = (function () {
    function Chicken(x, y, tree, g) {
        var _this = this;
        this.div = document.createElement("bird");
        tree.div.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.width = 67;
        this.height = 110;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.div.addEventListener("click", function () {
            if (_this.gun) {
                _this.gun.fire();
            }
            else {
                _this.gun = new Gun(_this, g);
            }
        });
    }
    Chicken.prototype.getDiv = function () {
        return this.div;
    };
    return Chicken;
}());
var Tree = (function () {
    function Tree(x, y, g) {
        this.chickens = [];
        this.div = document.createElement("tree");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.speed = Math.random() * 4 + 1;
        this.width = 414;
        this.height = 86;
        this.x = x;
        this.y = y;
        var chickenX = this.x + 10;
        for (var i = 0; i < 4; i++) {
            this.chickens.push(new Chicken(chickenX, -70, this, g));
            chickenX += this.width / 4;
        }
    }
    Tree.prototype.move = function () {
        this.x += this.speed;
        if (this.x > window.innerWidth)
            this.x = -450;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Tree;
}());
var Game = (function () {
    function Game() {
        this.trees = [];
        this.bullets = [];
        this.trees.push(new Tree(0, 100, this));
        this.trees.push(new Tree(0, 300, this));
        this.gameLoop();
    }
    Game.prototype.addBullet = function (bullet) {
        this.bullets.push(bullet);
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var i = 0; i < this.trees.length; i++) {
            this.trees[i].move();
        }
        for (var i = 0; i < this.bullets.length; i++) {
            this.bullets[i].move();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Bullet = (function () {
    function Bullet(x, y) {
        this.width = 22;
        this.height = 22;
        this.div = document.createElement("bullet");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.xspeed = -4;
        this.yspeed = 4;
        this.move();
    }
    Bullet.prototype.move = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Bullet;
}());
var Gun = (function () {
    function Gun(chicken, g) {
        this.div = document.createElement("gun");
        chicken.div.appendChild(this.div);
        this.x = 20;
        this.y = 40;
        this.game = g;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.fire();
    }
    Gun.prototype.getX = function () {
        return this.x;
    };
    Gun.prototype.getY = function () {
        return this.y;
    };
    Gun.prototype.fire = function () {
        var rect = this.div.getBoundingClientRect();
        console.log("plaats een kogel op " + rect.left + " , " + rect.top);
        var bullet = new Bullet(rect.left, rect.top + 30);
        this.game.addBullet(bullet);
    };
    return Gun;
}());
//# sourceMappingURL=main.js.map