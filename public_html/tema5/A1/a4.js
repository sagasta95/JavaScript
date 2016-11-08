var p = prompt("Introduce varias palabras, separadas con espacios");
var res = p.split(" ");
document.write("Primera palabra:" + res[0] + "<br>");
document.write("Ultima palabra:" + res[(res.length - 1)] + "<br>");
document.write("Numero de palabras:" + res.length + "<br>");
document.write("Lista ordenada alfabeticmaente:<br>");
res.sort();
for (var i = 0; i < res.length; i++){
    document.write(res[i] + "<br>");
}