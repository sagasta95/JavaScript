var name = prompt("Introduce tu nombre y apellidos: ", name);

document.write("Tamaño de la cadena (sin espacios): " + name.split(" ").join("").length + "<br>");
document.write("Cadena en minusculas: " + name.toUpperCase() + "<br>");
document.write("Cadena en mayusculas: " + name.toLowerCase() + "<br>");
name1 = name.split(" ");
document.write("Nombre: " + name1[0] + "<br>Apellido 1: " + name1[1] + "<br>Apellido 2: " + name1[2] + "<br>");
document.write("Propuesta para nombre de usuario (1): " + name1[0].charAt(0) + name1[1] + name1[2].charAt(0) + "<br>");
document.write("Propuesta para nombre de usuario (2): " + name1[0].substr(0,3) + name1[1].substr(0,3) + name1[2].substr(0,3) + "<br>");
