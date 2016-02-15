
var luminosity = function(r, g, b){
	return(0.2126*r + 0.7152*g + 0.0722*b)
}

var darken = function(r, g, b){
	console.log((.8*r), (.8*g), (.8*b));
}

module.exports = {
luminosity: luminosity,
darken: darken
};