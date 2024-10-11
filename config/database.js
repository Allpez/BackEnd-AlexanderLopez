import mongoose from "mongoose";

let url = process.env.URI_MONGO //Direccion de la base de datos. ya no estan quemados por no estas la url directa

console.log(url);

// hay dos tipos de conecciones.

// mongoose.connect(url)
// .then(() => console.log("database connected"))
// .catch(error => console.log(error))

async function coneccionBaseDeDatos() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("database connected")

    } catch(error) {
    console.log(error)
    }
}
coneccionBaseDeDatos()