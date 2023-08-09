function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please Enter a number";
  } else {
    const cube = Math.pow(number, 3);
    return cube;
  }
}

// console.log(cubeNumber(-3));

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please enter a string";
  } else if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}

/* const string1 = "javaScript";
const string2 = "ohn";
console.log(matchFinder(string1, string2)); */

function sortMaker(arr) {
  if (arr[0] !== arr[1] && arr[0] > 0 && arr[1] > 0) {
    const sort = arr.sort((a, b) => a - b);
    return sort;
  } else if (arr[0] === arr[1] && arr[0]) {
    return "equal";
  } else {
    if (arr[0] > 0 || arr[1] > 0) {
      return "invalid input";
    }
  }
}

// const array = [3, -2];
// const result = sortMaker(array);
// console.log(result);

// console.log(sortMaker([2, 2]));

function findAddress(obj) {
  const street = obj.street || "__";
  const house = obj.house || "__";
  const society = obj.society || "__";
  return street + "," + house + "," + society;
}

/* const object = {
  street: 10,
  house: "15A",
  society: "Earth Perfect",
};
console.log(findAddress(object)); */

function canPay(changeArray, totalDue) {
  let sum = 0;
  for (let i = 0; i < changeArray.length; i++) {
    const element = changeArray[i];
    sum = sum + element;
  }
  const length = changeArray.length;

  if (length === 0) {
    return "The input is empty. Please give some value";
  } else {
    if (sum > totalDue) {
      return true;
    } else {
      if (sum < totalDue) {
        return false;
      }
    }
  }
}

const arr = [1, 5, 5];
const due = 10;
console.log(canPay(arr, due));
