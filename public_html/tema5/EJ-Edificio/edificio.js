var nuevo = 0;

//Agregamos las plantas y las puertas
function addPlantasPuertas(numPlantas, numPuertas) {
    this.numPlantas = numPlantas;
    this.numPuertas = numPuertas;
}

//Los set de la calle, codigo postal y numero
function modificarNumero(numero) {
    this.numero = numero;
}
function modificarCalle(calle) {
    this.calle = calle;
}
function modificarCodigoPostal(codPostal) {
    this.codPostal = codPostal;
}


//Funciones que muestran calle numero y cod postal
function mostrarCalle() {
    document.write("Calle: " + this.calle + "<br>");
}
function mostrarNumero() {
    document.write("Numero: " + this.numero + "<br>");
}
function mostrarCodigoPostal() {
    document.write("Codigo Postal: " + a.codPostal + "<br>");
}


//Creamos el objeto propietario de la casa
function addPropietario(nombre, planta, puerta) {
    var persona = {nombre: nombre, planta: planta, puerta: puerta};
    document.write(nombre + " es el propiertario de la puerta: " + puerta + ", en la planta: " + planta + "<br>");
    this.prop[nuevo] = persona;
    nuevo++;
}

//Creamos el edificio
function Edificio(calle, numero, codPostal) {
    this.calle = calle;
    this.numero = numero;
    this.codpostal = codPostal;
    this.numPlantas = 0;
    this.numPuertas = 0;
    this.addPlantasPuertas = addPlantasPuertas;
    this.modificarNumero = modificarNumero;
    this.modificarCodigoPostal = modificarCodigoPostal;
    this.mostrarCalle = mostrarCalle;
    this.mostrarNumero = mostrarNumero;
    this.mostrarCodigoPostal = mostrarCodigoPostal;
    this.addPropietario = addPropietario;
    this.prop = new Array();
    document.write("Se ha construido un edificio en calle: " + this.calle + ", numero: " + this.numero + ", y codigo postal: " + this.codpostal + "<br>");
}

//Ejecutamos
var e1 = new Edificio("Club Deportivo", 48, 26007);
e1.addPropietario("Jorge", 4, "Izq");
e1.mostrarNumero();
e1.mostrarCalle();










