var person = {
  firstName: 'Alex',
  lastName: 'Denbaugh',
  hobby: 'Sports'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's full name is:", fullName);

person.job = 'student';
console.log("This person's current occupation is:", person.job);

person.previousJob = 'Cru Intern';
console.log("This person's previous job was:", person.previousJob);

console.log(person);

var myCar = {
  make: 'Ford',
  model: 'F-150',
  year: '2002'
};

myCar['owner'] = fullName;

var carInfo = 'My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.';
console.log(carInfo);

myCar['color'] = 'white';
console.log('My car info:', myCar);
