var css = document.querySelector("h2");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var direction = document.querySelectorAll(".direction");

var selectDirection = function(){
	for (var i = 0; i<direction.length; i++){
		if(direction[i].checked)
		{
	 		//console.log(direction[i].value);
	 		return direction[i].value;
		}
	}
}


var gradientColor = function(){
	var dir = selectDirection();
	body.style.background = "linear-gradient(to " + dir + ", " + color1.value + " ," + color2.value + ")";
	console.log(body.style.background);
	css.textContent= body.style.background + ";";
	
	
}

color1.addEventListener("input",gradientColor);
color2.addEventListener("input",gradientColor);
for (var i = 0; i<direction.length; i++){
		direction[i].addEventListener("click",gradientColor);
	}