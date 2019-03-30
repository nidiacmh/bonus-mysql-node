"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//para importar express
const express = require("express");
const path = require("path");
//para saber que opciones tiene, que argumentos contiene se agrega una comunidad en la terminal.
//crear una clase para el servidor corriendo, el default es para que lo importe por defecto
class Server {
    constructor(puerto) {
        this.port = puerto;
        this.app = express();
    }
    //Dispara el constructor e inicia todo
    static init(puerto) {
        return new Server(puerto);
    }
    publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }
    //Start que comence a escuchar todo
    start(callback) {
        this.app.listen(this.port, callback);
        this.publicFolder();
    }
}
exports.default = Server;
