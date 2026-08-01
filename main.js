const express = require('express');
require('./config/env');
const conectDB = require('./config/database');
const productoRoutes = require('./routers/routes.producto');

const app = express();

conectDB();

app.use(express.json());
app.use('/api/productos', productoRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'servidor corriendo exitosamente' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
