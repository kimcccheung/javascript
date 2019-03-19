var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var myHeading2 = document.querySelector('h2');
function setUserName() {
  var myName = prompt('Please enter your name.');
  // localStorage 的 API，這個 API 可以讓使用者先將一些資料儲存在瀏覽器裡面，之後有需要的話再取出來使用
  localStorage.setItem('name', myName);
  myHeading2.innerHTML = 'JS is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading2.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}