//para importar express
import express = require('express');
import path =  require('path');
//para saber que opciones tiene, que argumentos contiene se agrega una comunidad en la terminal.

//crear una clase para el servidor corriendo, el default es para que lo importe por defecto
export default class Server{
  public app: express.Application;
  public port: number;

  constructor(puerto: number){
    this.port = puerto;
    this.app = express();
  }

//Dispara el constructor e inicia todo
  static init(puerto: number){
    return new Server(puerto);
  }

  private publicFolder(){
    const publicPath = path.resolve( __dirname, '../public');

    this.app.use(express.static(publicPath));
  }

  //Start que comence a escuchar todo
  start(callback: Function){
    this.app.listen(this.port, callback);
    this.publicFolder();
  }
}
