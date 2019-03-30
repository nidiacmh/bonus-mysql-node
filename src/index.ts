// TypeScript es un super set que añade mejores funciones a javaScript
//Estos dos comparten muchos codigos, lo unico que agrega TypeScript son tipados
import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';

//console.log('Codigo de TypeScript convertido a javaScript');

const server = Server.init(3000);

server.app.use(router)

// MySQL.instance;

server.start(() => {
  console.log('Servidor corriendo en el puerto 3000');
})
