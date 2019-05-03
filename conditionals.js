//quick OR example

var iceCreamVanOutside = 'on fire';
var houseStatus = '';
if (iceCreamVanOutside || houseStatus === 'on fire') {
  console.log('You should leave the house quickly.');
} else {
  console.log('Probably should just stay in then.');
}

var x = 5;
if (x === 5 || 7 || 10 || 20) {
  // run my code
  console.log('x = '+x);
}

//Make Conditionals
var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);


function setWeather() {
  var choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}

// var html = document.querySelector('html');
// document.body.style.padding = '10px';

// select.onchange = function() {
//   ( select.value === 'black' ) ? update('black','white') : update('white','black');
// }


//Active learning: A simple calendar
//var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function() {
 var choice = select.value;

 switch(choice) {
 case 'black':
 update('black','white');
 break;
 case 'white':
 update('white','black');
 break;
 case 'purple':
 update('purple','white');
 break;
 case 'yellow':
 update('yellow','darkgray');
 break;
 case 'psychedelic':
 update('lime','purple');
 break;
 }
}

function update(bgColor, textColor) {
 html.style.backgroundColor = bgColor;
 html.style.color = textColor;
}