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

//Custom Function Call Map Function
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]


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
result = fn_inside(5); // returns 8
console.log("fn_inside(5): "+result);


result1 = outside(3)(5); // returns 8
console.log("outside(3)(5): "+result1);


//Multiply-nested functions
//scope chaining
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3)


//Closures - provides a sort of encapsulation for the variables of the inner function.

var pet = function(name) {   // The outer function defines a variable called "name"
  var getName = function() {
    return name;             // The inner function has access to the "name" variable of the outer 
                             //function
  }
  return getName;            // Return the inner function, thereby exposing it to outer scopes
}
myPet = pet('Vivie');
   
console.log(myPet());                     // Returns "Vivie"

//Closures#2

var createPet = function(name) {
  var sex; //Not accessible by
  
  return {
    setName: function(newName) {
      name = newName;
    },
    
    getName: function() {
      return name;
    },
    
    getSex: function() {
      return sex;
    },
    
    setSex: function(newSex) {
      if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' || 
        newSex.toLowerCase() === 'female')) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet('Vivie');
console.log(pet.getName());                  // Vivie

pet.setName('Oliver');
pet.setSex('male');
console.log(pet.getSex());                   // male
console.log(pet.getName());                  // Oliver


//Using the arguments object : The arguments variable is "array-like", but not an array. It is array-like in that it has a numbered index and a length property
function myConcat(separator) {
   var result = ''; // initialize list
   var i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return console.log(result);
}

// returns "red, orange, blue, "
myConcat(', ', 'red', 'orange', 'blue');

// returns "elephant; giraffe; lion; cheetah; "
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

// returns "sage. basil. oregano. pepper. parsley. "
myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');

//Passing Parameters
myConcat(', ', 'red', 'orange', 'blue');
function multiply(a, b) {
  b = typeof b !== 'undefined' ?  b : 1;

  return a * b;
}

console.log(multiply(5)); // 5

function multiply2(a, b = 1) {
  return a * b;
}

console.log(multiply2(5)); // 5


//Arrow Functions: Shorter Functions
var a = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

var a2 = a.map(function(s) { return s.length; });

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map(s => s.length);

console.log(a3); // logs [8, 6, 7, 9]