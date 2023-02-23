const modContacto = require('../models/ContactoModel')

exports.obtenerContactos = async (req, res) =>{
   try {
    const contactos = await modContacto.find()
    res.json(contactos)
   } catch (error) {
    
   }
    
}

exports.obtenerContacto = (req, res) =>{
    res.send('Consultando un contactos')
}


exports.crearContacto = async (req, res) =>{
    try {
        let contacto 
        contacto = new modContacto(req.body)
        await contacto.save()
        res.send(contacto)
    } catch (error) {
        console.log (error)
        res.status(500).send('algo pasa al momento de enviar la informacion')
    
    }
}

exports.actualizarContacto = (req, res) =>{
    res.send('actualizando algo en mi api')
} 

exports.eliminarContacto = (req, res) =>{
    res.send('eliminando algo en mi api mi api')
}

