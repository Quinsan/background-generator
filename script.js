var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");

function randomColor() {
	var col = Math.floor((Math.random() * 256))
	+ ","
	+ Math.floor((Math.random() * 256))
	+ ","
	+ Math.floor((Math.random() * 256));
	return col;
}

function randomBackground() {
	body.style.background = 
		"linear-gradient(to right, rgb("
		+ randomColor()
		+ "), rgb("
		+ randomColor()
		+ "))";

	css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomBackground);