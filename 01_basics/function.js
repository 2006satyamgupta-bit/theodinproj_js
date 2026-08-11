function favouriteAnimal(animal){
    return animal + " is my favourite animal!"
}

const message = favouriteAnimal('Goat')
console.log(message)

console.log(favouriteAnimal('Goat'))

// function random(number){
//     return Math.floor(Math.random()*number);
// }

// function myFunction(){
//     alert("Hello");
// }
// myFunction()


// function logKey(event){
//     console.log(`You pressed "${event.key}" .`)
// }
// textBox.addEventListener("keydown", logKey);

// // Anonymous functions 

// textBox.addEventListener("keydown", function(event){
//     console.log(`You pressed "${event.key}" .`)
    
// })


const originals = [1, 2, 3];
//  we're using the map() method of Array to double every value in the original array:
const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]

// assignment

function add7(num){
    return num + 7;
}

console.log(add7(10))

function multiply(num1, num2){
    return num1 * num2;
}

console.log(multiply(3, 2))



function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalize("abcd")); // "Abcd"
console.log(capitalize("ABCD")); // "Abcd"
console.log(capitalize("aBcD")); // "Abcd"




function lastLetter(str){
    return str.charAt(str.length - 1);
}

console.log(lastLetter("abcd"))