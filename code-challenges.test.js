// ASSESSMENT 2: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// describe("multBy3", () => {
//     it("takes in an array of numbers and returns an array with all the numbers multipled by 3", () => {
//         const numbersArray1 = [6, 7, 8, 9, 10]
//         const numbersArray2 = [24, 27, 30, 33, 36]
//       expect(multBy3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
//       expect(multBy3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
//     })
//   })

//   const multBy3 = (array) => {
//     return array.map(value => value * 3)
//     // could put return here and make a variable
// }



//const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
//const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.




// ______________________________________________________________________________________________________


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// describe("divisibleBy3",() => {
//     it("takes a number as an argument and decides if the number is evenly divisble by three or not",() => {
//         const num1 = 15
//         const num2 = 0
//         const num3 = -7
//         expect(divisibleBy3(num1)).toEqual("15 is divisible by three")
//         expect(divisibleBy3(num2)).toEqual("0 is divisible by three")
//         expect(divisibleBy3(num3)).toEqual("-7 is not divisible by three")  
//     })
// })

// ● divisibleBy3 › takes a number as an argument and decides if the number is evenly divisble by three or not

// ReferenceError: divisibleBy3 is not defined


const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"


// PSEUDO:
// input:num1 which is 15, num2 which is 0, num3 which is -7
// use conditionals
// use modulo 3 to determine if each number is divisible by 3
// use strictly equals if the number is divisible
// use bang operator if it is not
// return result
// output: decides if the number is evenly divisble by three or not


// b) Create the function that makes the test pass.
// const divisibleBy3 = (numbers) => {
//     if (numbers % 3 === 0){
//         return "15 is divisible by three" 
//     } else if (numbers % 3 !== 0) { 
//         return "-7 is not divisible by three"
//     }  
// }
// divisibleBy3(num1)
// divisibleBy3(num2)
// divisibleBy3(num3)

// Expected: "0 is divisible by three"
// Received: "15 is divisible by three"

//   61 |         const num3 = -7
//   62 |         expect(divisibleBy3(num1)).toEqual("15 is divisible by three")
// > 63 |         expect(divisibleBy3(num2)).toEqual("0 is divisible by three")
//      |                                    ^
//   64 |         expect(divisibleBy3(num3)).toEqual("-7 is not divisible by three")  
//   65 |     })
//   66 | })



// I could not get this to pass
// I understand that there is something wrong with line 63
// I tried googling matchers to see if I was using the wrong matcher
// I tried also using .toBe but still got the same failure in my terminal
// I also think line 89 needs a fix. I think the error on that line is with the parameter
// I tried string in the parameter on line 89, putting nothing, putting number, and putting num1, num2, num3 but to no avail
// Am I getting that error because the first if statement is true, so it keeps stopping there and returning the string of "15 is divisible by 3" ?






//_________________________________________________________________________________________________________________

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


describe("firstCapLetter", () => {
    it("takes in an array of words and returns an array with all the words capitalized", () => {
      expect(firstCapLetter(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(firstCapLetter(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
  })

//   FAIL  ./code-challenges.test.js
//   firstCapLetter
//     ✕ takes in an array of words and returns an array with all the words capitalized (1 ms)

//   ● firstCapLetter › takes in an array of words and returns an array with all the words capitalized

//     ReferenceError: capital is not defined

// b) Create the function that makes the test pass.

// PSEUDO:
// Create a function called firstCapLetter
// paramter will be array
// input:num1 which is 15, num2 which is 0, num3 which is -7
// use.map to do something to each value in the array and return an array of the same length
// use .toUpperCase to capitalize
// use charAt() in order to index the 1st letter of each word
// and .slice to return the extracted part into the new strings
// call the function and pass randomNouns1 and randomNouns2
// output: an array that has capitalized all the first letters of all the strings

let firstCapLetter = (array) => {
return array.map(array => array.charAt(0).toUpperCase()+ array.slice(1))
}

firstCapLetter(randomNouns1)
firstCapLetter(randomNouns2)


// PASS  ./code-challenges.test.js
// firstCapLetter
//   ✓ takes in an array of words and returns an array with all the words capitalized (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total







// ______________________________________________________________________________________________________
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


describe("firstVowel", () => {
    it("takes in a string and logs the index of the first vowel", () => {
      expect(firstVowel(vowelTester1)).toEqual([1])
      expect(firstVowel(vowelTester2)).toEqual([0])
      expect(firstVowel(vowelTester3)).toEqual([2])
    })
  })

//   FAIL  ./code-challenges.test.js
//   firstCapLetter
//     ✓ takes in an array of words and returns an array with all the words capitalized (1 ms)
//   firstVowel
//     ✕ takes in a string and logs the index of the first vowel

//   ● firstVowel › takes in a string and logs the index of the first vowel

//     ReferenceError: firstVowel is not defined



// b) Create the function that makes the test pass.

// PSEUDO: create a function called firstVowel
// parameter will be number because were expecting numbers to be the output
// use for loop to iterate through each string to find the first vowel
// use indexOf to return the index of the vowels
// call the function and pass vowelTester1, vowelTester2, vowelTester3


let firstVowel = (number) => {
   for(let i=0; i<number.length; i++){
    return number.length.indexof()
   }
}

firstVowel(number(vowelTester1))
firstVowel(number(vowelTester2))
firstVowel(number(vowelTester3))

// I did not get this to pass
// I know it is my return line for sure and maybe even lines 233-235
// I tried googling how to log the first vowel of a string in Javascript