const modProducto = require('../models/ProductoModel')

exports.obtenerProductos = async (req, res) =>{
    try {
     const productos = await modProducto.find()
     res.json(productos)
    } catch (error) {
        console.log(error)
         res.status(500).send('algo pasa al momento de buscar los productos')
    }
 }
 
 exports.obtenerproducto = async (req, res) =>{
     try {
        let producto
        producto = await modProducto.findById(req.params.id)
        if (!producto){
            res.status(404).json({msg:'El producto no se ha encontrado en la base de datos'})
        }
        res.json(producto)
     } catch (error) {
        console.log(error)
        res.status(500).send('algo pasa al momento de buscar el producto especifico')
     }
 }
 
 
 exports.crearProducto = async (req, res) => {
     try {
         let producto
         producto = new modProducto(req.body)
         await producto.save()
         res.send(producto)
     } catch (error) {
         console.log (error)
         res.status(500).send('algo pasa al momento de crear la informacion del producto')
     }
 }
 
 exports.actualizarProducto = async (req, res) =>{
     try {
        let {Nombre , Descripcion, RutaImg, Precio} = req.body
        let producto = await modProducto.findById(req.params.id)
         if (!producto){
            res.status(404).json({msg:'El producto no se ha encontrado en la base de datos'})
        }

        producto.Nombre = Nombre
        producto.Descripcion = Descripcion
        producto.RutaImg = RutaImg
        producto.Precio = Precio

        producto = await modProducto.findOneAndUpdate({_id:req.params.id}, producto , {new:true})
        res.json(producto)
     } catch (error) {
        console.log(error)
         res.status(500).send('algo pasa al momento de actualizar el producto')
    }
 } 
 
 exports.eliminarProducto = async (req, res) => {
     try {
         let producto
         producto = await modProducto.findById(req.params.id)
         if (!producto){
             res.status(404).json({msg:'El producto no se ha encontrado en la base de datos'})
         }
         await modProducto.findOneAndRemove({_id:req.params.id})
         res.json({msg:'producto eliminado satisfactoriamente'})
     } catch (error) {
         console.log(error)
         res.status(500).send('algo pasa al momento de eliminar el producto')
     }
 }
 