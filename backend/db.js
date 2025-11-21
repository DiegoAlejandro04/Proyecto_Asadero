// backend/db.js
const mongoose = require('mongoose');

const conectarDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/rikopollo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('❌ Error al conectar con MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = conectarDB;
