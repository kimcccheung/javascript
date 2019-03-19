//Map Object
console.log("======Keyed Collections=====");
console.log("======Maps=====");
var sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (var [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0

console.log("======Sets=====");
var mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

mySet.has(1); // true
mySet.delete('foo');
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"

//Converting between Array and Set



console.log("=====Converting between Array and Set=====");
mySet2 = new Set([1, 2, 3, 4]);
var myExArray = Array.from(mySet2);
myExArray.forEach(function(element) {
  console.log(element);
});

// WeakSets are collections of objects only and not of arbitrary values of any type.