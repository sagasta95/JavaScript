function Ciudad(){
    this.edificios = new Array();
    
    this.addEdificio = function (edificio){
        this.edificios.push(edificio);
    };
    
    this.getEdificios = function (){
        return this.edificios;
    };
}