var nbrEnter = parseInt(prompt("Entrez le nb de valeurs que vous souhaitez saisir :"));
var tab = "";
while (nbrEnter>0){
	tab += prompt("entrez la valeur : ") + " ";
	nbrEnter--;
};
alert(tab);