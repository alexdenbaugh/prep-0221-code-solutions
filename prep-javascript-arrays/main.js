var languagesArray = [
  'html',
  'css',
  'javascript',
  'react',
  'node.js'
];

console.log('languages array:', languagesArray);
console.log('Length of array =', languagesArray.length);

languagesArray.push('c#');
languagesArray.push('php');
console.log('New languages array', languagesArray);

languagesArray.pop();
console.log('Last index removed', languagesArray);

languagesArray.unshift('c++');
console.log('unshifted array', languagesArray);

languagesArray.shift('c++');
console.log('shifted array', languagesArray);

var thirdElement = languagesArray[2];
console.log('3rd element in languagesArray is:', thirdElement);

var arrayLength = languagesArray.length;
console.log('The length of languagesArray is:', arrayLength);

var lastItem = languagesArray[arrayLength - 1];
console.log('The last item of the array is:', lastItem);
