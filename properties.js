/* var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
}; */

//1st method
// var penCount = shoppingCart.pen;

//2nd Method
/* var penCount = shoppingCart["pen"]; */

// console.log(penCount);

/* var propertyName = "mouse";
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue); */

// properties. Return as an array
/* var properties = Object.keys(shoppingCart);
console.log(properties); */

// key values. Return as an array
/* var propertyValues = Object.values(shoppingCart);
console.log(propertyValues); */

// set property Value
// shoppingCart.pen = 15;
//or
// shoppingCart["mouse"] = 30;
//or
/* var propertyName = "mouse";
shoppingCart[propertyName] = 100;
console.log(shoppingCart); */

/* ============================= Object Looping ============================ */
var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
  shoes: 2,
};

const keys = Object.keys(shoppingCart);
// console.log(keys);

const values = Object.values(shoppingCart);
// console.log(values);

/* for (var i = 0; i < keys.length; i++) {
  var propertyName = keys[i];
  var propertyValue = shoppingCart[propertyName];
  console.log(propertyName, propertyValue);
}
 */
//Using For in loop // Easy
for (var propertyName in shoppingCart) {
  const values = shoppingCart[propertyName];
  console.log(propertyName, values);
}
