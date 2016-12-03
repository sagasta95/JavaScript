function Edificio(calle, numero, cod) {
    this.calle = calle;
    this.numero = numero;
    this.cod = cod;
    this.plantas = new Array();

    this.getCalle = function () {
        return this.calle;
    };
    this.getNumero = function () {
        return this.numero;
    };
    this.getCodPostal = function () {
        return this.cod;
    };
    this.getPlantas = function () {
        return this.plantas;
    };
    this.setCalle = function (c) {
        this.calle = c;
    };
    this.setNumero = function (c) {
        this.numero = c;
    };
    this.setCodPostal = function (c) {
        this.cod = c;
    };
    this.agregarPlantasYPuertas = function (plantas, puertas){
        for(var i = 0; i < plantas; i++){
            this.getPlantas().push(new Planta(puertas));
        }
    };
    this.agregarPropietario = function (planta, puerta, prop){
        this.getPlantas()[planta].getPuertas()[puerta].setPropietario(prop);
    };
}