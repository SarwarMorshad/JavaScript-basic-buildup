/* ================ Feet to Inch =================== */
function feetToInch(feet) {
  const inch = feet * 12;
  return inch;
}

//const result = feetToInch(1);
// console.log(result);

/* ============== centimeter to Meter ================== */
function centimeterToMeter(cm) {
  const Meter = cm * 0.01;
  return Meter;
}

// const result = centimeterToMeter(100);
// console.log(result);

/* ==================== Count Paper ======================= */
function paperRequirement(bookOneQuantity, bookTwoQuantity, bookThreeQuantity) {
  const bookOnePage = 100;
  const bookTwoPage = 200;
  const bookThreePage = 300;

  const bookOneTotalPage = bookOneQuantity * bookOnePage;
  const bookTwoTotalPage = bookTwoQuantity * bookTwoPage;
  const bookThreeTotalPage = bookThreeQuantity * bookThreePage;

  const totalPage = bookOneTotalPage + bookTwoTotalPage + bookThreeTotalPage;
  return totalPage;
}

const totalPage = paperRequirement(1, 2, 3);
// console.log(totalPage);

/* =========== Highest Length of a string from an Array ============ */

function bestFriend(friends) {
  let longestName = "";
  let charCount = 0;
  for (let i = 0; i < friends.length; i++) {
    let element = friends[i].length;
    if (element > charCount) {
      longestName = friends[i];
      charCount = element;
    }
  }
  return longestName;
}

const friends = ["Alex", "bob", "Carry", "Michel"];
const friendFound = bestFriend(friends);
// console.log(friendFound);

/* =============== Only Positive from an array ===================== */
function onlyPositive(numbers) {
  let positiveNumber = [];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element >= 0) {
      positiveNumber.push(element);
    } else {
      break;
    }
  }
  return positiveNumber;
}

const numbers = [10, 20, -22, 12, 11];
const result = onlyPositive(numbers);
// console.log(result);
