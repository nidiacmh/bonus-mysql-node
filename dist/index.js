"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// TypeScript es un super set que añade mejores funciones a javaScript
//Estos dos comparten muchos codigos, lo unico que agrega TypeScript son tipados
const server_1 = __importDefault(require("./server/server"));
const router_1 = __importDefault(require("./router/router"));
//console.log('Codigo de TypeScript convertido a javaScript');
const server = server_1.default.init(3000);
server.app.use(router_1.default);
// MySQL.instance;
server.start(() => {
    console.log('Servidor corriendo en el puerto 3000');
});