function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log('Numbers added:', addTwoNumbers(4, 4));

function convertHoursToMinutes(number) {
  var minutes = number * 60;
  return minutes;
}

var minutes = convertHoursToMinutes(2);
console.log('Minutes:', minutes);

function personalizedGreeting(name) {
  var personalGreeting = 'Hello ' + name + ', good luck with your future endevors.';
  return personalGreeting;
}

var greeting = personalizedGreeting('Alex');
console.log('Greeting:', greeting);

function addAndMultipyBy5(num1, num2) {
  var product = (num1 + num2) * 5;
  return product;
}

var addAndMultiplyResult = addAndMultipyBy5(10, 5);
console.log('Add and x5:', addAndMultiplyResult);

function multiplyAndDivideBy5(num1, num2) {
  var quotient = (num1 * num2) / 5;
  return quotient;
}

var multiplyAndDivideResult = multiplyAndDivideBy5(35, 10);
console.log('Multiply and divide by 5:', multiplyAndDivideResult);

function subtractTwoNumbers(num1, num2) {
  var difference = num1 - num2;
  return difference;
}

var subtractTwoNumbersResult = subtractTwoNumbers(16, 4);
console.log('The difference:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  return circumference;
}

var circleCircumference = getCircleCircumference(2);
console.log('Circumference:', circleCircumference);

function getFullName(firstName, lastName) {
  var fullName = "The name's " + lastName + ', ' + firstName + ' ' + lastName + '.';
  return fullName;
}

var myFullNameIs = getFullName('James', 'Bond');
console.log("Stranger: 'Who are you?'", 'Me:', myFullNameIs);

function cube(number) {
  var numCubed = number * number * number;
  return numCubed;
}

var numberCubedIs = cube(16);
console.log('The number cubed', numberCubedIs);
