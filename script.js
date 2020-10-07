function test() {
	document.getElementById("test").innerHTML = "its working if you can see this";
}

//Slideshow Function
var i = 0;
var images = [
  "FoodPictures/1.jpg",
	"FoodPictures/2.jpg",
	"FoodPictures/3.jpg"
];
var time = 3000;

function changeImg() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;

