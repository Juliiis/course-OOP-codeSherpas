var lavadora = {
    marca: "Miele",
    modelo: "WCA020 WCS Active",
    capacidad: 7,
    pesoTotal: 3,
    programaSeleccionado: "rapido",
    programaEnProceso: true,

    introducirRopa(){
        const introducir = true
        if(introducir === true){
            return this.pesoTotal + 1
        }
    }

}
console.log(lavadora.introducirRopa(true))