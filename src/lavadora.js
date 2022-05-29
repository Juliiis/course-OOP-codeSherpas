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
    },

    quitarRopa(){
        const quitar = true
        if(quitar === true){
            return this.pesoTotal - 1
        }
    }
}
console.log(lavadora.introducirRopa(true))
console.log(lavadora.quitarRopa(true))