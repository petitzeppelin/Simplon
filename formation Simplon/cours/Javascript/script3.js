var nbrEnter = parseInt(prompt("Entrez le nb de valeurs que vous souhaitez saisir :"));
var tab = [];
var positif = 0;
var negatif = 0;
var div = null;
while (nbrEnter>0){
	tab.push(prompt("entrez la valeur : "));
	nbrEnter--;
};
for (var i = 0; i < tab.length; i++) {
	if (tab[i] > 0) {
		positif ++;
	}
	else{
		negatif++;
	}

}
document.getElementById('boucle_js').innerHTML = "nb de positifs : " + positif + "<br>" + "nb de negatifs : " + negatif;


