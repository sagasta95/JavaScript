var fecha1 = new Date(2016,9,12);
var fecha2 = new Date();
document.write("Faltan " + Math.round((fecha1 - fecha2) / (1000 * 86400)) + " dias");