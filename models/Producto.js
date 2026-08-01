const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true
    },
    precio: {
      type: Number,
      required: [true, 'El precio es obligatorio'],
      min: [0, 'El precio no puede ser negativo']
    },
    stock: {
      type: Number,
      default: 0,
      min: [0, 'El stock no puede ser negativo']
    },
    categoria: {
      type: String,
      enum: ['aseo', 'jugueteria', 'panaderia', 'otro'],
      default: 'otro'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Producto', productoSchema);
