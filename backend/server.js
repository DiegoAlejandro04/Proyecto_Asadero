// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // <-- Importa variables del .env

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 Conexión a MongoDB Atlas
mongoose.connect('mongodb+srv://admin:1234@cluster0.tzbjoch.mongodb.net/rikopollo?retryWrites=true&w=majority')
  .then(() => console.log('✅ Conexión exitosa a MongoDB Atlas'))
  .catch(err => console.error('❌ Error de conexión:', err));


// 🛠 Importar rutas
const productosRoutes = require('./routes/productos');
app.use('/api/productos', productosRoutes);

// 🚀 Iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Servidor backend corriendo en puerto ${PORT}`));
