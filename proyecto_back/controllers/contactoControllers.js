const modContacto = require('../models/ContactoModel')

exports.obtenerContactos = async (req, res) =>{
   try {
    const contactos = await modContacto.find()
    res.json(contactos)
   } catch (error) {
    console.log(error)
         res.status(500).send('algo pasa al momento de buscar los contactos') 
   }

}

exports.obtenerContacto = async (req, res) =>{
    try {
        let contacto
        contacto = await modContacto.findById(req.params.id)
        if (!contacto) {
            res.status(404).json({msg:'El producto no se ha encontrado en la base de datos'})
        }
        res.json(contacto)
    } catch (error) {
        console.log(error)
        res.status(500).send('algo pasa al momento de buscar el producto especifico')
    }
}


exports.crearContacto = async (req, res) => {
    try {
        let contacto 
        contacto = new modContacto(req.body)
        await contacto.save()
        res.send(contacto)
    } catch (error) {
        console.log (error)
        res.status(500).send('algo pasa al momento de crear la informacion del contacto')
    }
}

exports.actualizarContacto = async (req, res) =>{
    try {
        let {Nombres, Apellidos, Correo, Ciudad, Telefono, Mensaje} = req.body
        let contacto = await modContacto.findById(req.params.id)
        if (!contacto) {
            res.status(404).json({msg:'El producto no se ha encontrado en la base de datos'})
        }

        contacto.Nombres = Nombres
        contacto.Apellidos = Apellidos
        contacto.Correo = Correo
        contacto.Ciudad = Ciudad
        contacto.Telefono = Telefono
        contacto.Mensaje = Mensaje

        contacto = await modContacto.findOneAndUpdate({_id:req.params.id}, contacto , {new:true})
        res.json(contacto)
    } catch (error) {
        console.log(error)
         res.status(500).send('algo pasa al momento de actualizar el producto especifico')  
    }
} 

exports.eliminarContacto = async (req, res) => {
    try {
        let contacto
        contacto = await modContacto.findById(req.params.id)
        if (!contacto){
            res.status(404).json({msg:'Contacto no hecontrado en la base de datos'})
        }
        await modContacto.findOneAndRemove({_id:req.params.id})
        res.json({msg:'contacto eliminado satisfactoriamente'})
    } catch (error) {
        console.log(error)
        res.status(500).send('algo pasa al momento de eliminar el contacto')
    }
}

