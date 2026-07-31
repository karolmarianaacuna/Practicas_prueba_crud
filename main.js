const express = require('express');
require('./config/env');


const app = express();// iniciamos el sevidor 

app.get('/', (req, res) => {
  res.json({ message: 'servidor corriendo exitosamente' });
});


const PORT = process.env.PORT ;
console.log(PORT) //VALIDACION DE QUE ME ESTE CARGANDO EL PUERTO DE LAS VARIABLES DE ENTORNO 

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});