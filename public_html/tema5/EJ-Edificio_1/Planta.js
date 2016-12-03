function Planta(n) {
    
    this.puertas = new Array();
    for (var i = 0; i < n; i++) {
        this.puertas[i] = new Puerta(i);
    }
    
    this.getPuertas = function (){
        return this.puertas;
    };
}