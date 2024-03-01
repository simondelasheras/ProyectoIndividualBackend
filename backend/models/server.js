const express = require("express");
const cors = require("cors"); //Permite el intercambio de info de origen cruzado
const { dbConnection } = require("../database/db")


class Server {
  constructor() {

    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";
    this.mathPath = "/math";
    this.authPath = "/api/auth";

    //Middlewares
    this.middlewares();

    //Rutas de mi app

    this.routes();
    //Conexión a DB
    this.conectarDB();

  }

  async conectarDB() {
    await dbConnection();


  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
    this.app.use(this.mathPath, require("../routes/math"));
    this.app.use(this.authPath, require("../routes/auth"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    })
  }


}

module.exports = Server;