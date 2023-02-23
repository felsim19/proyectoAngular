const express = require('express')
const router = express.Router()

const contactoController = require('../controllers/contactoControllers')

router.get('/obtener-contactos', contactoController.obtenerContactos)
router.post('/crear-contacto', contactoController.crearContacto)
router.put('/actualizar-contacto', contactoController.actualizarContacto)
router.delete('/eliminar-contacto', contactoController.eliminarContacto)

module.exports = router