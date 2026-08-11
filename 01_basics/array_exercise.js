// reference : https://javascript.info/array-methods#tasks

// translate border-left-width to borderLedtWidth

function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

console.log(camelize("background-color"))


// filter 

function filterRange(arr, a, b){
         return arr.filter(item => (item >= a && item<=b))     
}
let arr = [5, 3, 8, 1]

console.log(filterRange(arr, 1 ,4))
console.log(arr)

// sort in descending order


// map to names

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];


// let names = users.map(item => item.name)

// console.log(names)


let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map((user) => {
    fullname: `${user.name} ${user.surname}`;
    id: user.id
});

console.log(usersMapped[0].id)