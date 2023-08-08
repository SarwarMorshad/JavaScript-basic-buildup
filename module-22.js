const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = { id: 121, class: 11, name: "Alice" };
const friends = [13, 14, 12, 15, 18, 17, 33];

function add(num1, num2) {
  return num1 + num2;
}

/* console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends)); //To check array or not
console.log(typeof add); */

/* ========================= To check Element is available or not ============================ */

//console.log(friends.includes(13));
//or
if (friends.indexOf(13) !== -1) {
  //console.log("True");
} else {
  //console.log("false");
}

/* ===================== Concatenate  Array =====================*/
const newFriends = [55, 66, 77, 88];
const allFriends = newFriends.concat(friends);
// console.log(allFriends);

/* ==================== Slice/splice an array ===================== */
const height = [10, 23, 12, 45, 34, 64, 4];
const partial = height.slice(2, 5); //Slice (index, index)
//console.log(partial);

/* ====================== Splice ================== */
/*
>> Remove element of an array,
>> if necessary insert
>> return deleted element
>> will change original array
 */
const partial2 = height.splice(2, 3, 555, 666); //Splice (index, next three)
//const partial2 = height.splice(2, 3, 555, 666); // (index, next three, insert, insert,.....)
// console.log(partial2);
// console.log(height);

/* ==================== Duplicate items in an array ======================= */

function removeDuplicate(names) {
  const noDuplicateNames = [];
  for (let i = 0; i < names.length; i++) {
    const element = names[i];
    // console.log(element);
    if (noDuplicateNames.includes(element) === false) {
      noDuplicateNames.push(element);
    }
  }
  return noDuplicateNames;
}

const duplicateNames = ["John", "Alice", "Bob", "Anna", "John", "Anna", "Alex"];
const uniqueNames = removeDuplicate(duplicateNames);
// console.log(uniqueNames);

/* ================= Foo Bar Problem ===================== */
/* for (let i = 0; i < 50; i++) {
  if (i % 3 === 0 && i % 5 == 0) {
    console.log("Foobar");
  } else if (i % 3 === 0) {
    console.log("Foo");
  } else if (i % 5 === 0) {
    console.log("Bar");
  } else {
    console.log(i);
  }
} */

/* ============= Multiplication and calculate wood requirements ============ */
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairWood = chairQuantity * perChairWood;
  const tableWood = tableQuantity * perTableWood;
  const bedWood = bedQuantity * perBedWood;

  const totalWood = chairWood + tableWood + bedWood;

  return totalWood;
}

const totalWood = woodCalculator(0, 0, 5);
// console.log(totalWood);

/* ================= Cheapest phone from an array ==================*/
function cheapestPhone(phones) {
  let Cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const element = phones[i];
    if (element.Price < Cheapest.Price) {
      Cheapest = element;
    }
  }
  return Cheapest;
}

const phones = [
  { name: "Samsung", camera: 12, Price: 32000, color: "black" },
  { name: "Walton", camera: 12, Price: 22000, color: "black" },
  { name: "Symphony", camera: 12, Price: 20000, color: "black" },
  { name: "HTC", camera: 12, Price: 42000, color: "black" },
  { name: "Iphone", camera: 12, Price: 62000, color: "black" },
];

const mySelection = cheapestPhone(phones);
// console.log(mySelection);

/* =============== Total cost of Products in a Shopping cart ================ */
function shoppingCartTotal(items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    // console.log(element);
    sum = sum + element.price * element.quantity;
  }
  return sum;
}

const shoppingCart = [
  { product: "Shirt", price: 1000, quantity: 3 },
  { product: "jeans", price: 2000, quantity: 3 },
  { product: "shoe", price: 1200, quantity: 3 },
];

const total = shoppingCartTotal(shoppingCart);
// console.log("Total Expense:", total);

/* ================= Multi layer discount Calculation ============== */
// >> First 100 = 100 Taka
// >> 100 to 200 = 90 Taka
// >> Above 200 = 80 Taka

function ticketPriceCount(ticketQuantity) {
  const first100Rate = 100;
  const second100rate = 90;
  const restRate = 80;

  if (ticketQuantity <= 100) {
    const totalPrice = ticketQuantity * first100Rate;
    return totalPrice;
  } else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100Rate;
    const restPrice = (ticketQuantity - 100) * second100rate;
    const totalPrice = first100Price + restPrice;
    return totalPrice;
  } else {
    const first100Price = 100 * first100Rate;
    const second100Price = 100 * second100rate;
    const restPrice = (ticketQuantity - 200) * restRate;
    const totalPrice = first100Price + second100Price + restPrice;
    return totalPrice;
  }
}

const totalExpense = ticketPriceCount(220);
// console.log("Total Ticket Price:", totalExpense);

/* ========================== Error Handle ======================= */
