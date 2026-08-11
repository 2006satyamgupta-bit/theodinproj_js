function Player(name, marker){
    this.name = name;
    this.marker = marker;
    this.sayName = function(){
        console.log(this.name);
    };
}

// The only difference is that you use it by calling the function with the keyword new:

const player1 = new Player("Satyam", "X")
const player2 = new Player("Rudra", "O")
// console.log(player1.name)

player1.sayName(); // Satyam
player2.sayName(); // Rudra

// Since constructors can be called without using new by mistake, which would cause hard-to-track errors as it won’t do all the new object and this binding stuff, we should safeguard them. You can use the new.target meta-property like this, which will throw an error if Player is called without new:

function Gamer(name, marker){
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.name = name;
    this.marker = marker;
    this.sayName = function(){
        console.log(this.name);
    };
}
const player3 = new Gamer("Ayush", "A");
player3.sayName()


//EXERCISE

function book(name, author, pages, ifRead){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.ifRead = ifRead;
    this.info = function(){
        console.log(`${this.name} by ${this.author}, ${this.pages}, ${this.ifRead} `)
    };
}

const book1 = new book("The Hobbit", "J.R.R Tolkein", "295 pages", "not read yet") 
console.log(book1.info())

