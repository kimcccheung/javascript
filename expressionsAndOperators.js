/*

Learning by Kim
2019-3-4

*/
var foo = ['one', 'two', 'three'];

// without destructuring
var one   = foo[0];
var two   = foo[1];
var three = foo[2];



// with destructuring
var [one, two, three] = foo;


console.log([one],[two],[three]);

//Unary Operators
//f the delete operator succeeds, it sets the property or element to undefined. The delete operator returns true if the operation is possible; it returns false if the operation is not possible.
var ex = 42;
var ey = 43;
myobj = new Number();
myobj.h = 4;    // create property h
delete ex;       // returns true (can delete if declared implicitly)
console.log(ex);
delete ey;       // returns false (cannot delete if declared with var)
console.log(ey);
delete Math.PI; // returns false (cannot delete predefined properties)
delete myobj.h; // returns true (can delete user-defined properties)
console.log(myobj.h);
delete myobj;   // returns true (can delete if declared implicitly)
//console.log(myobj);

//Deleting array elements

var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
delete trees[3];
if (3 in trees) {
  // this does not get executed
  
}else{
	console.log('delete array element successful!');
}


//Relational operators - in
// Arrays
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
'bay' in trees;    // returns false (you must specify the index number,
                   // not the value at that index)
'length' in trees; // returns true (length is an Array property)

// built-in objects
'PI' in Math;          // returns true
var myString = new String('coral');
'length' in myString;  // returns true

// Custom objects
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // returns true
'model' in mycar; // returns true


/*
You could call validate in each form element's onChange event handler, using this to pass it the form element, as in the following example:

<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size=3 onChange="validate(this, 18, 99);">
*/

//super
/*
super([arguments]); // calls the parent constructor.
super.functionOnParent([arguments]);
*/

//Spread operator
var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];

for (let i = 0; i<lyrics.length; i++)
// the spread operator works with function calls
{
	console.log(lyrics[i]);
}

function f(x, y, z) { console.log(f[0]);}
var args = [0, 1, 2];
f(...args);

