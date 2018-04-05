var nombre = parseInt(prompt("entre un nombre"));

(function (entree){
	var estPremier = 0;
	var liste =[];
	if (entree === 0 || entree === 1) {
		liste.push(1)
		return alert("ce nombre n'est pas premier, voici ses diviseurs : " + liste);
	}
	else {
		for (var i = 2; i < entree; i++) {
			if ((entree%i)===0) {
				estPremier++;
				liste.push(i);
			}
		}
		if (estPremier>0) {
			
			return alert("ce nombre n'est pas premier, voici ses diviseurs : " + liste);

		}
		else{
			
			return alert("ce nombre est premier");
		}
	}
})(nombre);

