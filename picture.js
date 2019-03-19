var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/00.jpg') {
      myImage.setAttribute ('src','images/01.jpg');
    } else {
      myImage.setAttribute ('src','images/02.jpg');
    }
}