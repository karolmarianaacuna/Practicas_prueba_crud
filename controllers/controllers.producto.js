const Producto = require('../models/Producto');

const registro = async (req, res) => {
  try {
    const { name, precio, stock, categoria } = req.body;

    if (!name || precio === undefined) {
      return res.status(400).json({ message: 'El nombre y el precio son obligatorios' });
    }

    const existeProducto = await Producto.findOne({ name: name.trim() });
    if (existeProducto) {
      return res.status(400).json({ message: 'El producto ya esta registrado' });
    }

    const producto = await Producto.create({ name, precio, stock, categoria });
    return res.status(201).json({
      message: 'Producto registrado exitosamente',
      producto
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registro
};
