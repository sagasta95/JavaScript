var n = parseInt(prompt("Pasame un numero: ", n));

document.write("El numero " + n + " tiene un valor exponencial de:" + n.toExponential() + "<br>");
document.write("El numero " + n + " con 4 decimales es:" + n.toFixed(4) + "<br>");
document.write("El numero " + n + "en binario es: " + n.toString(2) + ".<br>");
document.write("El numero " + n + "en octal es: " + n.toString(8) + ".<br>");
document.write("El numero " + n + "en hexadecimal es: " + n.toString(16) + ".<br>");