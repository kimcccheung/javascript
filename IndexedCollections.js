var colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
  console.log(color);
});
// red
// green
// blue


var array = ['first', 'second', , 'fourth'];

array.forEach(function(element) {
  console.log(element);
});
// first
// second
// fourth

if (array[2] === undefined) { 
  console.log('array[2] is undefined'); // true
} 

array = ['first', 'second', undefined, 'fourth'];

array.forEach(function(element) {
  console.log(element);
});
// first
// second
// undefined
// fourth


//
var myArray = new Array('1', '2', '3');
//myArray = myArray.concat('a', 'b', 'c'); 

// myArray is now ["1", "2", "3", "a", "b", "c"]

//var list = myArray.join(' - '); // list is "Wind - Rain - Fire"
// list.forEach(function(element){
	//console.log("list:" + list);
/*})*/



//myArray.push('3');	//Push New element to the end



var last = myArray.pop(); //Last Element Move out.
console.log("pop: "+last);
var first = myArray.shift(); //First Element Remove Out.
console.log("shift: "+first);

myArray.unshift('4', '5');  // Put New Elements into the Front.
// myArray becomes ["4", "5", "1", "2", "3"]
myArray.forEach(function(element) {
  console.log(element);
});


var myArray2 = new Array('a', 'b', 'c', 'd', 'e');
myArray2 = myArray2.slice(1, 4);	// starts at index 1 and extracts all elements
                               // until index 3, returning [ "b", "c", "d"]
myArray2.forEach(function(element){	
	console.log(element);
});

var myArray2 = new Array('1', '2', '3', '4', '5');
myArray2.splice(1, 3, 'a', 'b', 'c', 'd'); 
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was), 
// removed 3 elements there, and then inserted all consecutive
// elements in its place.


myArray2.reverse(); 

myArray2.forEach(function(element){
	console.log(element);
})
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was), 
// removed 3 elements there, and then inserted all consecutive
// elements in its place.

// the following will sort by the last letter of a string:
var myArray3 = new Array('Wind', 'Rain', 'Fire');

var sortFn = function(a, b) {
  if (a[a.length - 1] < b[b.length - 1]) return -1;
  if (a[a.length - 1] > b[b.length - 1]) return 1;
  if (a[a.length - 1] == b[b.length - 1]) return 0;
}
myArray3.sort(sortFn); 
// sorts the array so that myArray = ["Wind","Fire","Rain"]


//indexOf() returns the position
var a = ['a', 'b', 'a', 'b', 'a'];
console.log(a.indexOf('b')); // logs 1
// Now try again, starting from after the last match
console.log(a.indexOf('b', 2)); // logs 3
console.log(a.indexOf('z')); // logs -1, because 'z' was not found


var a1 = ['a', 'b', 'c'];
var a2 = a1.map(function(item) { return item.toUpperCase(); });
console.log(a2); // logs ['A', 'B', 'C']


var a3 = ['a', 10, 'b', 20, 'c', 30, 'd', 55];
var a4 = a3.filter(function(item) { return typeof item === 'number'; });
//return any elements which is 'number'
console.log(a4); // logs [10, 20, 30, 55]

function isNumber(value) {
  return typeof value === 'number';
}
var a5 = [1, 2, 3];
console.log(a5.every(isNumber)); // logs true
var a6 = [1, '2', 3];
console.log(a6.every(isNumber)); // logs false


function isNumber2(value) {
  return typeof value === 'number';
}
var a7 = [1, 2, 3];
console.log(a7.some(isNumber2)); // logs true
var a8 = [1, '2', 3];
console.log(a8.some(isNumber2)); // logs true
var a9 = ['1', '2', '3'];
console.log(a9.some(isNumber2)); // logs false


var a10 = [10, 20, 30];
var total = a10.reduce(function(accumulator, currentValue) { return accumulator + currentValue; }, 0);
console.log(total) // Prints 60

//Working with array-like objects
function printArguments() {
  Array.prototype.forEach.call('a string', function(chr) {
  console.log(chr);
});
}

printArguments();