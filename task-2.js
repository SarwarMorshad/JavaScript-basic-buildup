// Module 19
// Task 1
/* function bar() {
  console.log("bar");
}

function foo() {
  console.log("foo");
  bar();
}

foo(); */

// Task 2
/* function make_avg(a, b, c) {
  var average = a + b + c;
  console.log(average);
}

make_avg(1, 2, 3); */

//Task 3
function make_avg(array, size) {
  var sum = 0;
  for (var i = 0; i < size; i++) {
    sum = sum + array[i];
  }
  var average = sum / size;
  console.log(average);
}

var numArray = [1, 2, 3, 6];
var size = 4;
make_avg(numArray, size);

// Task 4
