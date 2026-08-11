const myObject = {
    property: "value!",
    otherProperty: 77,
    "obnoxoious property": function(){
        //do stuff!
    },
};

// Two ways to access information out of an object

//dot notation

console.log(myObject.property); // "value!"

// bracket notation

console.log(myObject["obnoxious property"]) // [function]

// without objects
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

//with objects

const playerOne ={
    name: "Satyam",
    marker: "X",
};

const playerTwo = {
    name: "Rudra",
    marker: "O",
};

function gameOver(winningPLayer){
    console.log("Congratulations!");
    console.log(`${winningPLayer.name} ${winningPLayer.marker} is the winner!`)
}

gameOver(playerOne)


//NOte: we’re not limited to storing data in objects, we can store logic as well via methods (which are just functions that are part of an object), then use those methods to interact with the data.
// Nearly anything you can think about can be described as an object. To do so, all you have to ask yourself is “What properties (physical or conceptual) does my thing have?”, and “How can I interact with it?”. The properties or attributes of a thing are expressed as properties, and the ways you can interact with that thing are expressed as methods.

const car = {
    make: "Volkswagen",
    model: "Golf",
    year: "2026",
    color: "blue",
    priceUSD: 40000,

    // a method is just a function assigneed to a property
    applyDiscount: function(discountPercentage){
        const multiplier = 1 - discountPercentage/100;
        this.priceUSD *= multiplier;
    },

    getSummary(){
        return `${this.year} ${this.make} ${this.model} in ${this.color}, priced at ${this.priceUSD} (USD). `;
    },

    //These methods use the this keyword to refer to the object they get called from (car). The this keyword can be used to read and assign properties of an object in exactly the same way you would for any other variable that points to an object    
};

car.applyDiscount(10);
console.log(car.getSummary())

// tic tac toe

const rps = {
    playerScore: 0,
    computerScore: 0,
    playRound(playerChoice){
        // code to play the round, update score if needed, then return the result
    },
    getWinningPlayer(){
        // return the player with the most points ("player", "computer", or "tie")
    },

    reset(){
        //reset both player's scores to 0
    },
};

rps.playRound("rock"); // returns "player" because we are awesome at rps
console.log(rps.playerScore); // 1 - we won and so our score increased

rps.playRound("rock"); // returns "computer" because ... luck ..
console.log(rps.computerScore);

rps.playRound("scissors"); // returns "player" because we are awesome at rps
console.log(rps.playerScore); // 2
console.log(rps.getWinningPlayer()); // "player since we sre 2-1 up

rps.reset();
console.log(rps.playerScore); // 0
console.log(rps.computerScore); // 0