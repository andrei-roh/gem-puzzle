//add random image from images folder
const imagesFolder = 'assets/images/';
var quantity = 150;
let images = Array.apply(null, {length: quantity}).map(Number.call, Number);
images.shift();
var imageSrc = 'url' + '(' + imagesFolder + images[randomInteger(1, 149)] + '.jpg' + ')';
//take random number from min to max
function randomInteger(min, max) {
  let randomNumber = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(randomNumber);
}
