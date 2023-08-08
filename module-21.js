/* ========================= String ======================== */

const userName = "blackPink";
const userInput = "blackPinK";

const upperCase = userName.toUpperCase();
const lowerCase = userInput.toLowerCase();

if (userName.toLowerCase() === userInput.toLowerCase()) {
  //console.log("valid User");
} else {
  //console.log("Invalid user");
}

const lyrics =
  "Lightning crashes a new mother cries.Her placenta falls to the floor The angel opens her eyes.The confusion sets in Before the doctor can even close the door";

const parts = lyrics.split(" ");
const sentences = lyrics.split(".");
const char = lyrics.split("");
// console.log(char);

const partial = lyrics.slice(5, 8);
// console.log(partial);

const lines = [
  "Lightning crashes a new mother cries",
  "Her placenta falls to the floor The angel opens her eyes",
  "The confusion sets in Before the doctor can even close the door",
];

const newLine = lines.join(": ");
// console.log(newLine);

/* =================================== Math Library =============================== */

const power = Math.pow(3, 2); //Power
// console.log(power);

const age1 = 25;
const age2 = 45;

const gap = Math.abs(age1 - age2); //Absolute
//console.log("Gap:", gap);

if (gap < 5) {
  //console.log("you can Marry");
} else {
  //console.log("You cant Marry");
}

const number = 12.4598;
const roundNumber = Math.round(number); //Round
// console.log(roundNumber);

const cellingNumber = Math.ceil(number); //Celling
// console.log(cellingNumber);

const floorNumber = Math.floor(number); //Floor
// console.log(floorNumber);

const randomNumber = Math.random() * 1000; // Random Number
// console.log(randomNumber);

/* ========================= Variable Swap Without Temp ====================== */
let first = 5;
let second = 7;

// Approach 1 Temporary variable
/* const temp = first;
first = second;
second = temp; */
// console.log(first, second);

// Destructing Approach
[first, second] = [second, first];
// console.log(first, second);

/* ============================ Who is the tallest? =============================== */
function maxInArray(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

const height = [167, 190, 120, 165, 137, 265];
const tallest = maxInArray(height);
// console.log("Tallest ", tallest);

/* ================================ Reverse String =========================== */
function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

const string = "I am a good boy";
const reverse = reverseString(string);
// console.log(reverse);

/* ====================== Fibonacci Series ============================== */

function fibonacci(fibonacci) {
  for (let i = 2; i < 15; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
}

const array = [0, 1];
const series = fibonacci(array);
// console.log("Fibonacci Series: ", series);
