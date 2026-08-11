// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.

//splice

    // let arr = ["I", "go", "home"];

    // delete arr[1]; // remove "go"
    // alert( arr[1] ); // undefined

    // // now arr = ["I",  , "home"];
    // alert( arr.length ); // 3



    // let arr1 = ["I", "study", "JavaScript", "right", "now"];

    // // remove 3 first elements and replace them with another
    // arr1.splice(0, 3, "Let's", "dance");
    // alert( arr1 ) // now ["Let's", "dance", "right", "now"]

// loops


// map
    // You can use map() to do something to each item in a collection and create a new collection containing the changed items:
    // const cats = ["leopard", "serval", "jaguar", "tiger", "caracal", "lion"]

    // const upperCats = cats.map((eachCat)=>{
    //     return eachCat.toUpperCase()
    // })

    // console.log(upperCats)

            //or

    // function toUpper(string) {
    //     return string.toUpperCase();
    //     }

    //     const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

    //     const upperCats = cats.map(toUpper);

    //     console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]



//filter
    // const filtered = cats.filter((lcat)=>{
    //     return lcat.startsWith("l")
    // })

    // console.log(filtered)

                // or

//  function lCat(cat) {
//   return cat.startsWith("L");
// }

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const filtered = cats.filter(lCat);

// console.log(filtered);
// [ "Leopard", "Lion" ]

//calculating squares  : for loop

// const results = document.querySelector("#results")

// function calculate(){
//     for(let i = 1; i<10; i++){
//         const newResult = `${i} * ${i} = ${i * i}`;
//         results.textContent =  `${newResult}\n`
//     }
//     results.textContent += "\Finished!\n\n"
// }

// const claculateBtn = document.querySelector('#calculate');
// const clearBtn = document.querySelector('#clear')

// calculateBtn.addEventListener('click', calculate)
// clearBtn.addEventListener('click', ()=>{
//     results.textContent = ""
// })



function sumOfTripledEvens(array){
    let sum  = 0;
    for(let i = 0 ; i< Array.length; i++){
        if(array[i]%2 === 0){
            const tripleEvenNumber = array[i]*3;
            sum += tripleEvenNumber;
        }
    }
    return sum;
}
const array = [2, 4, 6, 8, 10]  

console.log(sumOfTripledEvens(array))

function addOne(num){
    return num + 1;

}

const arr = [1, 2, 3, 4, 5,]
const mappedArr = arr.map(addOne);
console.log(mappedArr)


function isodd(num){
    return num % 2 !== 0;
}
const oddNums = arr.filter(isodd)

console.log(oddNums)
console.log(arr)


// reduce

const arr = [1, 2, 3, 4, 5];
const productOfAllItems = arr.reduce((total, currentItem) => {
    return total*currentItem
}, 1) 

console.log(productOfAllItems, arr);