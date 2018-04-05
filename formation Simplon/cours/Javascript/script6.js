function multiplication(nombre){
    elem = document.getElementById("table");
    maTable = "";
    for (var i = 1; i <= 10; i++) {
         maTable += nombre + " x " + i + " = " + (nombre*i) + "<br>";
    }
    elem.innerHTML = maTable;
}
var monChiffre = parseInt(prompt("donne moi un chiffre"));
multiplication(monChiffre);