function Puerta(n) {
    this.num_puerta = n;
    this.propietario = "Sin propietario";
    
    this.setPropietario = function (p){
        this.propietario = p;
    };
}