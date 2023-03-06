const mongoose = require('mongoose')

const productoschema = mongoose.Schema ({
    Nombre: {
        type:String,
        require:true
    },
    Descripcion: {
        type:String,
        require:true
    },
    RutaImg: {
        type:String,
        require:true
    },
    Precio: {
        type:Number,
        require:true
    },
    fecha_creacion: {
        type:Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('producto', productoschema)