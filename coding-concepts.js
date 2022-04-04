// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
// console.log(cohort.split(""))

// a) Your answer:"B" "r" "a" "v" "o" "2" "0" "2" "2"
// b) Verify and explain: I was correct. The .split takes the array and splits it separately into new individual strings


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student
// b) Verify and explain: it logged as undefined because the function does not have a return


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: an array of the same length that looks like [8, 10, 12, 14, 16]
// b) Verify and explain: I was correct. The HOF iteratres through the original array and multiplies each value by 2 and returns those new values in a new array of the same length


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: a new array with only the odd numbers [11, 13, 15]
// b) Verify and explain: I was correct. The HOF iterates through the array and makes a decision on whether each value is an odd number and logs it in the new array if it is.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: I was correct. We are referencing the class called myCodingSkills and we are looking for the 1st value in the array of languages


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: undefined
// b) Verify and explain: Learn { student: 'George', cohort: 'Bravo', year: 2022 } It logs as this because name is a parameter in the constructor. So, when we pass George in the new instance we just created using new, it gave us the output of George and all the key value pairs within the constructor
