console.log("Objects and properties");

var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
myCar['test'] = 'tesla';

// myCar['make'] = 'Ford';
// myCar['model'] = 'Mustang';
// myCar['year'] = 1969;

// four variables are created and assigned in a single go, 
// separated by commas
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log(myObj);

//to iterate over all the enumerable properties of an object.
console.log("===Iteration of Elements===");

var myCar2 = new Object();

var propertyName = 'make';
myCar2[propertyName] = 'Ford';

propertyName = 'model';
myCar2[propertyName] = 'Mustang';

function showProps(obj, objName) {
  var result = '';
  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += objName + '.' + i + ' = ' + obj[i] + '\n';
      console.log(result);
    }
  }
  return result;
}


showProps(myCar2,'myCar');


console.log("===list all properties of an object===");


//to reveal "hidden" properties (properties in the prototype chain which are not accessible through the object, because another property has the same name earlier in the prototype chain). Listing accessible properties only can easily be done by removing duplicates in the array.
function listAllProperties(o) {
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; 
           objectToInspect = Object.getPrototypeOf(objectToInspect)) {  
        result = result.concat(
            Object.getOwnPropertyNames(objectToInspect)
        );
        console.log(result);  
    }
	
	return result; 
}

listAllProperties(myCar2);

//Using object initializers

var myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}};

console.log("Using a constructor function");
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var Eagcar = new Car('Eagle', 'Talon TSi', 1993);
var kenscar = new Car('Nissan', '300ZX', 1992);
var vpgscar = new Car('Mazda', 'Miata', 1990);

showProps(Eagcar,'Eagcar');
showProps(kenscar,'kenscar');

//
console.log("===Using the Object.Create Method===");

// Animal properties and method encapsulation
var Animal = {
  type: 'Invertebrates', // Default value of properties
  displayType: function() {  // Method which will display type of Animal
    console.log(this.type);
  }
};

// Create new animal type called animal1 
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output:Fishes