// Prototype


function Player(name, marker){
    this.name = name;
    this.marker = marker;
    this.sayName = function(){
        console.log(this.name);
    };
}


const player1 = new Player("Satyam", "X")
const player2 = new Player("Rudra", "O")

// Both players were created with new Player(...), so both link back to the same Player.prototype object. This is the key efficiency win: you're not duplicating anything.

Object.getPrototypeOf(player1) === Player.prototype; // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true


// Neither player1 nor player2 has its own sayHello — it lives once on Player.prototype, and both objects find it by walking up the chain. Add it once, both players get it.

Player.prototype.sayHello = function() {
  console.log("Hello, I'm a player!");
};

player1.sayHello(); // logs "Hello, I'm a player!"
player2.sayHello(); // logs "Hello, I'm a player!"


// Player.prototype.__proto__
// Here's the chain continuing: Player.prototype is itself just an object, and its prototype is Object.prototype. So the full chain is:

// player1 → Player.prototype → Object.prototype → null
// This is why player1 can use methods like .valueOf() or .hasOwnProperty() — it doesn't have them itself, and Player.prototype doesn't have them either, but Object.prototype does, and the chain reaches it.
Object.getPrototypeOf(Player.prototype) === Object.prototype; // true


player1.valueOf(); // Output: Object { name: "Satyam", marker: "X" }

//  valueOf is inherited all the way from Object.prototype, three links up.

player1.hasOwnProperty("valueOf"); // false
Object.prototype.hasOwnProperty("valueOf"); // true

// This is the punchline. player1 can use valueOf (because JS walks the chain to find it), but player1 doesn't own it — hasOwnProperty only checks the object itself, not its prototype chain. valueOf actually lives on Object.prototype.

Object.prototype.hasOwnProperty("hasOwnProperty"); // true

// And hasOwnProperty itself lives on Object.prototype — that's the very top of the chain for plain objects. Object.prototype's own prototype is null, so the chain stops there.




