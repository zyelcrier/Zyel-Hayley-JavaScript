//Reading names of recipes onto first page
var fileArray = ["recipe/name.csv", "recipe/ingredients.csv", "recipe/directions.csv", "recipe/descriptions.csv"];

function recipeThumbBTNDiv(recID) {
	var div = document.createElement('div');
	div.classList.add('recipe-card');
	div.classList.add('s12');
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

function recipeThumbBTN(recID) {
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
	document.getElementById("recDetail0").style.display = "block";
	document.getElementById("recDetail1").style.display = "block";
	document.getElementById("recDetail2").style.display = "block";
	document.getElementById("recipe-ingredients").innerHTML = '';
	Ingredients(recID);
	document.getElementById("recipe-directions").innerHTML = '';
	Directions(recID);

}
function Description (recID) {
	Papa.parse(fileArray[3], {
		delimiter: ",",
		download: true,
		header: true,
		keepEmptyRows: false,
		skipEmptyLines: true,
		complete: function (results) {
			for (var i = 0; i < results.data.length; i++) {
				recID = parseInt(recID);
				var curID = parseInt(results.data[i].ID);
				var bool = true;
				bool = recID == curID;
				console.log("bool: " + bool + " curID: " + curID + " recID: " + recID);
				if (bool) {
					console.log("here");
					var text = document.createTextNode(results.data[i].Description);
					console.log(text);
					document.getElementById("recipe-description").appendChild(text);
				};
			};
		}
	});
}

function Ingredients(recID) {
	Papa.parse(fileArray[1], {
		delimiter: ",",
		download: true,
		header: true,
		keepEmptyRows: false,
		skipEmptyLines: true,
		complete: function (results) {
			for (var i = 0; i < results.data.length; i++) {
				recID = parseInt(recID);
				var curID = parseInt(results.data[i].ID);
				var bool = true;
				bool = recID == curID;
				console.log("bool: " + bool + " curID: " + curID + " recID: " + recID);
				if (bool) {
					console.log("here");
					var li = document.createElement('li');
					var text = document.createTextNode(results.data[i].Ingredients);
					console.log(text);
					li.appendChild(text);
					console.log(li);
					document.getElementById("recipe-ingredients").appendChild(li);
				};
			};
		}
	});
}

function Directions(recID) {
	Papa.parse(fileArray[2], {
		delimiter: ",",
		download: true,
		header: true,
		keepEmptyRows: false,
		skipEmptyLines: true,
		complete: function (results) {
			for (var i = 0; i < results.data.length; i++) {
				recID = parseInt(recID);
				var curID = parseInt(results.data[i].ID);
				var bool = true;
				bool = recID == curID;
				console.log("bool: " + bool + " curID: " + curID + " recID: " + recID);
				if (bool) {
					console.log("here");
					var li = document.createElement('li');
					var text = document.createTextNode(results.data[i].Directions);
					console.log(text);
					li.appendChild(text);
					console.log(li);
					document.getElementById("recipe-directions").appendChild(li);
				};
			};
		}
	});
}
