var fecha1 = new Date(1970,1,1);
var fecha2 = new Date();
document.write("Faltan " + Math.abs((Math.round((fecha1 - fecha2) / (1000 * 86400)))) + " dias");