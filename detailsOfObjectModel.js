//Creating the hierarchy
function Employee(name, dept) {
  this.name = name || '';
  this.dept = dept || 'general';
  this.id = idCounter++;
}
Employee.prototype.specialty = 'none';

function Manager() {
  Employee.call(this);
  this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

function WorkerBee(name , dept , projs) {
  //Employee.call(this);
  this.base = Employee;
  this.base(name,dept);
  this.projects = projs || [];
}
//WorkerBee.prototype = Object.create(Employee.prototype);
WorkerBee.prototype = new Employee;
//WorkerBee.prototype = new Employee;
//WorkerBee.prototype.constructor = WorkerBee;

function SalesPerson() {
   WorkerBee.call(this);
   this.dept = 'sales';
   this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);
SalesPerson.prototype.constructor = SalesPerson;

function Engineer(name, projs, mach) {
  // WorkerBee.call(this);
  this.base  = WorkerBee;
  this.base(name,"engineering",projs);
   //this.dept = 'engineering';
   this.machine = mach || '';
}
//Engineer.prototype = Object.create(WorkerBee.prototype)

Engineer.prototype = new WorkerBee;
//Engineer.prototype.constructor = Engineer;

//New Class, derived from WorkerBee
//The constructor calls the base method, passing as its arguments two of the arguments passed to the constructor ("Doe, Jane" and ["navigator", "javascript"]) and also the string "engineering". Explicitly using "engineering" in the constructor indicates that all Engineer objects have the same value for the inherited dept property, and this value overrides the value inherited from Employee.

function Engineer2(name, projs, mach) {
	//Calling the WorkerBee constructor ensures that an Engineer object starts out with the properties specified in all constructor functions that are called. 
  this.base = WorkerBee;
  this.base(name, 'engineering', projs); //base = Engineer
  this.machine = mach || '';
}

Engineer2.prototype = new WorkerBee;
//Creating objects with simple definitions

var jim = new Employee; 
// Parentheses can be omitted if the
// constructor takes no arguments.
// jim.name is ''
// jim.dept is 'general'

var sally = new Manager;
// sally.name is ''
// sally.dept is 'general'
// sally.reports is []

var mark = new WorkerBee;
mark.name = 'Doe, Mark';
mark.dept = 'admin';
mark.projects = ['navigator'];


// Can add properties to any object at run time. Not for Class
mark.bonus = 3000;

console.log("mark new property: " + mark.bonus);

var fred = new SalesPerson;
// fred.name is ''
// fred.dept is 'sales'
// fred.projects is []
// fred.quota is 100

var jane = new Engineer('belau');
jane.name = '';
jane.dept = 'engineering';
jane.projects = [];
jane.machine = 'belau';
Engineer.prototype.specialty = 'none2';
console.log("Jane machine: " + jane.machine);
console.log("Jane specialty: " + jane.specialty);

//add that property to all objects that inherit properties from the prototype. 
Employee.prototype.specialty = 'none3';

//Employee2.prototype.specialty = 'none';
console.log("mark(WorkerBee) specialty property: "+mark.specialty );

var jane = new Engineer('Doe, Jane', ['navigator', 'javascript'], 'belau');

Engineer2.prototype.specialty = 'none';

console.log("Jane specialty property: "+jane.specialty );

var isTrue = (jane instanceof Engineer2);
console.log('jane instanceof Employee2?' + isTrue);



// function instanceOf(object, constructor) {
//    object = object.__proto__;
//    while (object != null) {
//       if (object == constructor.prototype)
//          return true;
//       if (typeof object == 'xml') {
//         return constructor.prototype == XML.prototype;
//       }
//       object = object.__proto__;
//    }
//    return false;
// }