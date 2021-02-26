// create your loops here.
var i;
var j;
var k;
var numberPlus2 = 0;
var countdown = 100;

for (i = 0; i < 10; i++) {
  console.log('number:', i);
}

for (j = 0; j < 10; j++) {
  console.log('number + 2:', numberPlus2);
  numberPlus2 = numberPlus2 + 2;
}

for (k = 0; k < 100; k++) {
  console.log('Time till explosion:', countdown, '!!!');
  countdown = countdown - 1;
}

console.log('If you are reading this, you are dead...');
