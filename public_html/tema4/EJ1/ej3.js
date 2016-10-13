var radio = prompt("Introduce el valor del radio: ", radio);

document.write("El valor del radio es: " + radio + " cm.<br>");
document.write("El valor del diametro es: " + 2 * radio + " cm.<br>");
document.write("El valor del perimetro de la circunferencia es: " + 2 * radio * Math.PI + " cm.<br>");
document.write("El valor del area del circulo es: " +  Math.pow(radio, 2) * Math.PI + " cm^2.<br>");
document.write("El valor del area de la esfera es: " +  4 * Math.pow(radio, 2) * Math.PI + " cm^3.<br>");