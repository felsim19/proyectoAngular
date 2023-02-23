const mongoose = require('mongoose')

const contactoSchema = mongoose.Schema({
    Nombres: {
        type: String,
        require: true
    },
    Apellidos: {
        type: String,
        require: true
    },
    Correo: {
        type:String,
        require: true
    }, 
    Ciudad: {
        type:String,
        require: true
    },
    Telefono: {
        type:String,
        require: true
    }, 
    Mensaje: {
        type:String,
        require: true
    },
    fecha_creacion: {
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('contacto', contactoSchema)