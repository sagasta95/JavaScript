var factura = {
    info_empresa: {nombre: "n1", direccion: "d1", telefono: "t1", nif: "nif1"},
    info_cliente: {nombre: "cn1", direccion: "cd1", telefono: "ct1", nif: "cnif1"},
    productos: [{descripcion: "p1", precio: 10, cantidad: 2}, 
                {descripcion: "p2", precio: 5, cantidad: 3}],
    inporte_total: 0,
    tipo_iva: "21%",
    forma_pago: "tarjeta",
    calcula_importe: function () {
        var sum = 0;
        for (var i = 0; i < this.productos.lenght; i++){
            sum = sum + this.productos[i]["precio"] * this.productos[i]["cantidad"]; 
        }
        this.importe_total = sum + ((sum * 21)/100);
    },
    getImporte_total: function () {
        return this.importe_total;
    }
};
factura.calcula_importe();
alert(factura.getImporte_total());