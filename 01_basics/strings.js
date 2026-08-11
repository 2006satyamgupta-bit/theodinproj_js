// refereing to the mdn's document

const string = "The revolution will not be televised.";
console.log(string);

const badString = string;
console.log(badString);


//embeded js
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"



// string catenation

const greeting2 = "Hello";
const name2 = "Bob";
console.log(greeting2 + ", " + name2); // Hello, Bob

const greeting3 = "Howdy";
const name3 = "Rudra";
console.log(`${greeting3} + " " + ${name3}`)

// adding expressions
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."


// multiline strings

const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/


// string vs numbers

const coolBandName = "Front ";
const number = 242;
console.log(coolBandName + number); // "Front 242"



// Number() converts anything passing passed to it into a number if it can.

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum); //number
console.log(myNum) //123


const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2) // string 
console.log(myString2) //123




// Basic String Methods

    //String length  .
    // String charAt() .
    // String charCodeAt() .
    // String codePointAt() .
    // String concat() . 
    // String at() . 
    // String [ ] . 
    // String slice() . 
    // String substring() .
    // String substr() .
    // String toUpperCase() .
    // String toLowerCase() .
    // 	String isWellFormed() .
    // String toWellFormed() .
    // String trim()
    // String trimStart()
    // String trimEnd()
    // String padStart()
    // String padEnd()
    // String repeat()
    // String replace()
    // String replaceAll()
    // String split()


// string length    
const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

// 4 methods for extracting string characters


        // string charAt()
        const text1 ="HELLO, WORLD";
        let char = text.charAt(0);  // returns the character at 0th index
        console.log(char)

        // string charCodeAt()
        char = text.charCodeAt(0);  // returns the char code
        console.log(char)

        // string codePointAt
        let code = text.codePointAt(0);
        console.log(code)

        // string at

        let word = "W3Schools"
        let letter = word.at(2)
        console.log(letter)

        letter = word.at(-5)
        console.log(letter) // 5th letter from the end

        //bracket method
        letter = word[2]
        console.log(letter)


//  concat
    let word1 = "Hello";
    let word2 = "World";
    let word3 = word1.concat(" ", word2);
    console.log(word3)


// extracting string parts : 
    // slice(start, end)
    // substring(start, end)
    // substr(start, length)

    const fruit = "Apple, Banana, Kiwi";;
    const part1 = fruit.slice(7, 13)
    console.log(part1) // Banana
    const part2 = fruit.slice(-12);
    console.log(part2) // Banana, kiwi
    const part3 = fruit.slice(-12, -6)
    console.log(part3) // Banana start = -12, end = -6  

    let str = "Apple, Banana, Kiwi";
    let part4 = str.substring(7, 13);

// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().


// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

    const part5 = str.substr(7, 6);
    console.log(part5);

// A string is converted to upper case with toUpperCase():
// A string is converted to lower case with toLowerCase():


// isWellFormed()
    const word4 = "Hello, World!" ;
    let result = word4.isWellFormed();
    console.log(result)
    
    const word5 = "Hello World \uD800";
    let result2 = word5.isWellFormed();
    console.log(result2);

    let result3 = word5.toWellFormed();
    console.log(result3)


    const word6 = "    Hello, World!   "
    const word7 = word6.trim(); // removes the white space from both the sides // Hello World!
                //word6.trimStart() // removes white space from start : Hello World!          
                //word6.trimEnd() // removes white space from end:       Hello World!          
    console.log(word7)
    
    const text2 = "5"
    let padded = text2.padStart(4, "0") // pad a string with "0" until it reaches the length 4 
    console.log(padded)
    let padded2 = text2.padStart(4, "x");
    console.log(padded2)

    //NOTE: The padStart() method is a string method.
        // To pad a number, convert the number to a string first.
        
        
        let padded3 = text2.padEnd(4, "0")  // pad a string from the end. It pads a string with another string (multiple times) until it reaches a given length.
        console.log(padded3)
        let padded4 = text2.padEnd(4, "x")
        console.log(padded4)
        
        //NOTE: The padEnd() method is a string method.
            // To pad a number, convert the number to a string first.

        let text3 = "Hello World "
        let result4 = text3.repeat(2); 
        console.log(result4) // Hello World Hello World

        let text5 = "Please visit Microsoft!";
        let newText = text5.replace("Microsoft", "W3Schools");
        console.log(newText)  // Please visit W3Schools

        // By default, the replace() method replaces only the first match:
        // For all string "Microsoft" to be replaced, use replaceAll(/Microsoft/g, "W3Schools")
        // g denotes the global set

        let text6 = "Please visit Microsoft and Microsoft!";
        let newText2 = text6.replaceAll(/Microsoft/g,"W3Schools") 
        console.log(newText2)


        // conversion of string to an array
            //text.split("") //split on characters
            // text.split(",") // split on characters
            //text.split(" ")  // split on spaces
            //text.split("|") // split on pipe

        let text7 = "Hi fox!";
        console.log(text7.split(""))  // ['H', 'i', ' ', 'f', 'o', 'x', '!' ]