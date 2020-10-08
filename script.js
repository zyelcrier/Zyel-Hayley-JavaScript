function test() {
	document.getElementById("test").innerHTML = "its working if you can see this";
}

//Reading names of recipes onto first page
let fileArray = ["recipe/name.csv", "recipe/ingredients.csv", "recipe/directions.csv"];

var data;

function readFile(file){
	var data = [];
	Papa.parse(fileArray[file], {
    delimiter: ",",
	  download: true,
    header: true,
    keepEmptyRows:false,
    skipEmptyLines: true,
      complete: function(results) {
				console.log("Finished:", results.data);
				for(var i=0; i<results.data.length; i++){
					data.push(results.data[i]);
				}
//        return result;
      }
    }); 
	return data;
};

var names= readFile(0);
var ingredients = readFile(1);
var directions = readFile(2);

console.log("Names:",names);
console.log("ingredients:",ingredients);
console.log("directions:",directions);