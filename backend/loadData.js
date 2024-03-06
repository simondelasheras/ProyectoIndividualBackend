
import mongoose from 'mongoose';
import { dbConnection } from '../backend/database/db.js';
import Product from '../backend/models/products.js';
import * as productsData from '../utils/db.json';


const loadData = async () => {
  // Conectar a la base de datos
  await dbConnection();

  try {
    // Eliminar todos los productos existentes en la base de datos
    await Product.deleteMany();

    // Insertar los productos desde el archivo JSON en la base de datos
    await Product.insertMany(productsData.products);

    console.log('Datos cargados exitosamente en la base de datos.');
  } catch (error) {
    console.error('Error al cargar datos en la base de datos:', error);
  } finally {
    // Cerrar la conexión a la base de datos al finalizar
    mongoose.connection.close();
  }
};

// Ejecutar la carga de datos
loadData();
