//Slideshow Function
var i = 0;
var images = [
	"images/pregnant.jpg",
  "FoodPictures/1.jpg",
	"FoodPictures/2.jpg",
	"FoodPictures/3.jpg",
	"FoodPictures/4.jpg",
	"FoodPictures/5.jpg",
	"FoodPictures/6.jpg"
];
var time = 2000;

function changeImg() {
	document.slide.src = images[i];
	if (i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}
	setTimeout("changeImg()", time);
};

window.onload = changeImg;