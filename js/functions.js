function myFunc(theObject) {
  theObject.make = 'Toyota';
}

var mycar = {make: 'Honda', model: 'Accord', year: 1998};
var fx, fy;

fx = mycar.make; // x gets the value "Honda"
console.log("fx: "+fx);


myFunc(mycar);
fy = mycar.make; // y gets the value "Toyota"
                // (the make property was changed by the function)

console.log("fy: "+fy);

//factorial
var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };

console.log(factorial(5));

function map(f, a) {
  var result = []; // Create a new Array
  var i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
var f = function(x) {
   return x * x * x; 
}
var numbers = [0, 1, 2, 5, 10];
var cube = map(f,numbers);
console.log(cube);

//Function Scope
// The following variables are defined in the global scope
var num1 = 20,
    num2 = 3,
    name = 'Chamahk';

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

document.write(multiply()+"<hr>"); // Returns 60

// A nested function example
function getScore() {
  var num1 = 2,
      num2 = 3;
  
  function add() {
    return document.write(name + ' scored ' + (num1 + num2)+"<hr>");
  }
  
  return add();
}

getScore(); // Returns "Chamahk scored 5"

// getting all the nodes of a tree structure (e.g. the DOM) is more easily done using recursion:

function walkTree(node) {
  if (node == null) // 
    return;
  // do something with node
  for (var i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}

// document.write(walkTree(Document.Body));

//Nested functions and closures

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41

console.log("a: "+a);
console.log("b: "+c);
console.log("c: "+c);

// inner function forms a closure
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you 
console.log("outside(3): "+fn_inside);
                        // 
result = fn_inside(5); // returns 
console.log("fn_inside(5): "+result);


result1 = outside(3)(5); // returns 8
console.log("outside(3)(5): "+result1);