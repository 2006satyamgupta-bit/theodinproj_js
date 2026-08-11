// const fruits = [];
// fruits.push("banana", "mango", "apple");
// console.log(fruits)

// fruits[5] = "peach";
// console.log(fruits[5]);
// console.log(fruits)
// console.log(Object.keys(fruits))
// console.log(fruits.length)

// fruits.length = 10;
// console.log(fruits)

// console.log(Object.keys(fruits))
// console.log(fruits.length)
// console.log(fruits[8])

// const colors = ["red", "purple", "blue"];
// colors[5] = "puple";

// for (let i = 0; i < colors.length; i++) {
//     const element = colors[i];
//     console.log(`${i}: ${element}`)   
    
//     // 0: red
//     // 1: purple
//     // 2: blue
//     // 3: undefined
//     // 4: undefined
//     // 5: puple
// }

// console.log(colors.reverse())  // [ 'puple', <2 empty items>, 'blue', 'purple', 'red' ]

// The following methods always create new arrays with the Array base constructor: toReversed(), toSorted(), toSpliced(), and with().

// array literal notation

// const fruits = ["Apple", "Banana"];
// console.log(fruits.length);
//2

// 'fruits2' array created using the Array() constructior

const array2 = new Array("Apple", "Banana");
console.log(array2.length) //2

//  string.prototype.split() method
const fruits3 = "Apple, Banana".split(", ")

console.log(fruits3.length)