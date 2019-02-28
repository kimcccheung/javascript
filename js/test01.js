function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = function() {
    return this.first + ' ' + this.last;
  };
  this.fullNameReversed = function() {
    return this.last + ', ' + this.first;
  };
}
var s = new Person('Simon', 'Willison');
document.write(s.fullName()+"<hr>");

// function personFullName() {
//   return this.first + ' ' + this.last;
// }
// function personFullNameReversed() {
//   return this.last + ', ' + this.first;
// }
// function NewPerson(first, last) {
//   this.first = first;
//   this.last = last;
//   this.fullName = personFullName;
//   this.fullNameReversed = personFullNameReversed;
// }

function NewPerson(first, last) {
  this.first = first;
  this.last = last;
}
NewPerson.prototype.fullName = function() {
  return this.first + ' ' + this.last;
};
NewPerson.prototype.fullNameReversed = function() {
  return this.last + ', ' + this.first;
};

var s2 = new NewPerson('abc','123');

NewPerson.prototype.firstNameCaps = function() {
  return this.first.toUpperCase();
};

document.write(s2.fullName()+"<hr>");
document.write(s2.firstNameCaps()+"<hr>");

var s3 = 'Simon';

//add things to the prototype of built-in JavaScript objects
String.prototype.reversed = function() {
  var r = '';
  for (var i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
};

s3.reversed(); // TypeError on line 1: s.reversed is not a function

document.write(s3.reversed()+"<hr>");

document.write("abc123".reversed()+"<hr>");


NewPerson.prototype.toString = function() {
  return '<Person: ' + this.fullName() + '>';
}

var s4 = new NewPerson('Kim','Cheung');

document.write(s4.toString()+"<hr>");

// var bill = trivialNew(Person, 'William', 'Orange'); //equivalent to the belowed
// var bill = new Person('William', 'Orange');

// apply() has a sister function named call, which again lets you set this but takes an expanded argument list as opposed to an array
function lastNameCaps() {
  return this.last.toUpperCase();
}
var s = new Person('Simon', 'Willison');
lastNameCaps.call(s);
// Is the same as:
s.lastNameCaps = lastNameCaps;
document.write(s.lastNameCaps()); // WILLISON


function makeAdder(a) {
  return function(b) {
    return a + b;
  };
}
var x = makeAdder(5);
var y = makeAdder(20);

document.write(x(6)+"<hr>");
document.write(y(7)+"<hr>");

document.write(x(7)+"<hr>");
document.write(y(8)+"<hr>");