//Reading names of recipes onto first page
let fileArray = ["recipe/name.csv", "recipe/ingredients.csv", "recipe/directions.csv", "recipe/descriptions.csv"];

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
var description = readFile(3);

console.log("Names:",names);
console.log("ingredients:",ingredients);
console.log("directions:",directions);
console.log("description:",description);