var seuil = 25;
var temp = parseInt(prompt("donne moi une température"));
function compareTemp(input){
	//var paragraph = document.getElementById("temperature");
	var paragraph = document.querySelector("#temperature");
	if (input === seuil) {
		paragraph.innerHTML = "la température " + input + " est égale au seuil " + seuil;
	}
	else if (input < seuil) {
		paragraph.innerHTML = "la température " + input + " est inférieure au seuil " + seuil;
	}
	else {
		paragraph.innerHTML = "la température " + input + " est supérieure au seuil " + seuil;
	}
}
compareTemp(temp);