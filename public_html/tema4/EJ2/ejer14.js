var dni = prompt("Escribe tu DNI sin la letra");
var letrasArray =['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var indice = dni % 23;
var letra = letrasArray[indice];
document.write(dni + letra);

