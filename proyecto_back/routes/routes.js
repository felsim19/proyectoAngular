const express = require('express')
const router = express.Router()

const contactoController = require('../controllers/contactoControllers')
const productoController = require('../controllers/ProductoController')

// Ruta Contactos

router.get('/obtener-contactos', contactoController.obtenerContactos)
router.post('/crear-contacto', contactoController.crearContacto)
router.delete('/eliminar-contacto/:id', contactoController.eliminarContacto)
router.get('/obtener-contactos/:id', contactoController.obtenerContacto)
router.put('/actualizar-contacto/:id', contactoController.actualizarContacto)

// Ruta Productos

router.post('/crear-producto', productoController.crearProducto)
router.get('/obtener-productos', productoController.obtenerProductos)
router.delete('/eliminar-producto/:id', productoController.eliminarProducto)
router.get('/obtener-productos/:id', productoController.obtenerproducto)
router.put('/actualizar-producto/:id', productoController.actualizarProducto)


module.exports = router