var bacterias = 3.55; //asigna a bacterias el valor 3.55
var texto = "bacterias en la probeta"; //crea la variable texto con un texto
var numeroInfinito = Infinity; //crea una variable que vale ∞ 
document.write("<br>La variable bacterias vale: " + bacterias); //imprime el valor de bacterias
bacterias = 3.55E-5;//bacterias lo multiplica por 100000
document.write("<br>La variable bacterias vale (multplicamos por 100000): " + bacterias);//muestra el nuevo valor de bacterias
document.write("<br>La variable bacterias ahora es (operación sin sentido): " + bacterias*texto);//devuelve NaN porque "Not a number" 
bacterias = 3.55E100000000000000000;//bacterias vale muchísimo, tanto que es infinito
document.write("<br>La variable bacterias ahora es demasiado grande: " + bacterias);//muestra valor
bacterias = 3.55E-100000000000000000;//ahora vale muy poco lo cual es 0
document.write("<br>La variable bacterias ahora es demasiado pequeña: " + bacterias);//muestra valor
document.write("<br>Un número positivo divido entre cero (indeterminazión matemática) devuelve: " + (4/0));//infinito
document.write("<br>Un número negativo divido entre cero (indeterminazión matemática) devuelve: " + (-4/0));//- infinito
document.write("<br>Cero divido entre cero devuelve: " + (0/0)); //NaN
document.write("<br>La variable numeroInfinito vale: " + numeroInfinito);//infinito
var diezCentimos = .1;//asigna valor 0.10
var veinteCentimos = .2;//asigna valor 0.20
var treintaCentimos = .3;//asigna 0.30
document.writeln("<br>Esperamos 0.1 y lo obtenemos: " + (veinteCentimos-diezCentimos));//0.10
document.writeln("<br>Esperamos 0.1 y no lo obtenemos: " + (treintaCentimos-veinteCentimos));//0.09?¿?¿?