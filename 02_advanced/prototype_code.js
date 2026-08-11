// recomended method for prototypical inheritance

function Person(name){
    this.name = name;
}

Person.prototype.sayName = function(){
    console.log(`Hello, I am ${this.name}!`);
};

function Gamer(name, marker){
    this.name = name;
    this.marker = marker;
}

Gamer.prototype.getMarker = function(){
    console.log(`My marker is ${this.marker}`);
};

Object.getPrototypeOf(Gamer.prototype); // returns Object.prototype

// Now make `Player` objectsss inherit from `Person`
Object.setPrototypeOf(Gamer.prototype, Person.prototype);
Object.getPrototypeOf(Gamer.prototype); // returns Person.prototype

const gamer1 = new Gamer("Satyam", "X");
const gamer2 = new Gamer("Rudra", "O");

gamer1.sayName();// Hello, I am Satyam
gamer2.sayName(); // Hello, I am Rudra

gamer1.getMarker(); // My marker is "X"
gamer2.getMarker(); // My marker is "O"

