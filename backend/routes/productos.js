const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    console.error('❌ Error al obtener productos:', error);
    res.status(500).json({ message: 'Error al obtener productos', error });
  }
});

// Crear un producto
router.post('/', async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    const guardado = await nuevoProducto.save();
    res.json(guardado);
  } catch (error) {
    console.error('❌ Error al crear producto:', error);
    res.status(500).json({ message: 'Error al crear producto', error });
  }
});

module.exports = router;
