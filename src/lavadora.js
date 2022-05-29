var lavadora = {
    marca: "Miele",
    modelo: "WCA020 WCS Active",
    capacidad: 7,
    pesoTotal: 3,

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
    },

    añadirDetergenteYsuavizante(){
        const añadir = true
        if(añadir === true){
            return "Has añadido detergente y suavizante"
        }
    },


}