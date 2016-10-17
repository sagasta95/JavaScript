var fecha1 = new Date();
fecha1.setTime(0);
var fecha2 = new Date(2001, 2, 11,19,26,00);
document.write((fecha2 - fecha1)/ (1000 * 60 * 60));