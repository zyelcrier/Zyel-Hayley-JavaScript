//Reading names of recipes onto first page
var fileArray = ["recipe/name.csv", "recipe/ingredients.csv", "recipe/directions.csv", "recipe/descriptions.csv"];

function recipeThumbBTNDiv(recID) {
	var div = document.createElement('div');
	div.classList.add('recipe-card');
	div.classList.add('s12');
	div.classList.add('m6');
	var img = imgThumbDiv(recID);
	div.appendChild(img);
	return div;
}

function imgThumbDiv(imgID) {
	var img = document.createElement('img');
	img.classList.add('circle');
	img.classList.add('responsive-img');
	img.src = `FoodPictures/${imgID}.jpg`;
	return img;
}

function recipeThumbBTN(recID){
	var btn = `
							<button id ="${recID}" onclick="loadSelectRecipe(${recID})">
              </button>`;
	return btn;
}


function readRecipeFile(file) {
	Papa.parse(fileArray[file], {
		delimiter: ",",
		download: true,
		header: true,
		keepEmptyRows: false,
		skipEmptyLines: true,
		complete: function (results) {
			for (var i = 0; i < results.data.length; i++) {
				var id = results.data[i].ID;
				var thumbnail_div = document.getElementById("recipe-thumbnails");
        var btn = recipeThumbBTN(id);
				thumbnail_div.innerHTML += btn;
				var div = recipeThumbBTNDiv(id);
				var text = document.createTextNode(results.data[i].RecipeName);
				div.appendChild(text);
				document.getElementById(id).appendChild(div)
			};
		}
	});
};

function loadSelectRecipe(recID) {
	var li = document.createElement('li');
	var text = document.createTextNode(recID);
	li.appendChild(text);
	document.getElementById("recipe-ingredients").innerHTML = '';
	document.getElementById("recipe-ingredients").appendChild(li);
}
