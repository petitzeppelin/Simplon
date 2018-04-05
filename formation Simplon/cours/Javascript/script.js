var age = parseInt(prompt("entrez votre age"));
if (age >=1 && age <= 17) {
	alert("pas encore majeur")
}
else if (age >= 18 && age <= 49) {
	alert("majeur mais pas senior")
}
else if (age >= 50 && age <= 59) {
	alert("senior mais pas retraité")
}
else if (age >= 60 && age <= 120) {
	alert("retraité")
}
else {
	alert("je n'ai pas compris")
}