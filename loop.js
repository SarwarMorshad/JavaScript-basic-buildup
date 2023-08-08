var numbers = [1, 3, 5, 89, 22, 45, 24, 56, 74, 67];

/* for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
} */

/* var i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}
 */

var friends = ["Rahim", "karim", "selim", "Joni", "Bob", "Alice"];

for (var index = 0; index < friends.length; index++) {
  if (friends[index] == "Bob") {
    break;
  }
  console.log(friends[index]);
}
