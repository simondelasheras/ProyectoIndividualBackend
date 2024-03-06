const mongoose = require("mongoose");

const dbConnection = async () => {

  try {

    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log("Base de datos online");
  } catch (error) {
    console.log(error)
    throw new Error("Error a la hora de iniciar la base de datos")
  }
}

module.exports = { dbConnection } 


// const mongoose = require('mongoose');

// const uri = 'tu-url-de-conexion-a-mongodb'; // Reemplaza con tu URL de conexión
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
// db.once('open', () => {
//   console.log('Conexión exitosa a MongoDB');
// });

// module.exports = db;
