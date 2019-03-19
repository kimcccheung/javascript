function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  alert('Number of options selected: ' + howMany(document.selectForm.musicTypes));
});

var i2 = 0;
do {
  i2 += 1;
  console.log(i2);
} while (i2 < 5);

//Example 2: Breaking to a label
var x2 = 0;
var z2 = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x2);
  x2 += 1;
  z2 = 1;
  while (true) {
    console.log('Inner loops: ' + z2);
    z2 += 1;
    if (z2 === 10 && x2 === 10) {
      break labelCancelLoops;
    } else if (z2 === 10) {
      break;
    }
  }
}

//continue
var i3 = 0;
var n3 = 0;
while (i3 < 5) {
  i3++;
  if (i3 == 3) {
    continue;
  }
  n3 += i3;
  console.log('n3: '+n3);
}
//1,3,7,12
function dump_props(obj, obj_name) {
  var result = '';
  for (var i in obj) {
    result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
  }
  result += '<hr>';
  return result;
}

//for...of statement
var arr = [3, 5, 7];
arr.foo = 'hello';

for (var i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (var i of arr) {
   console.log(i); // logs 3, 5, 7
}


