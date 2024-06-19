import server from './server';
import { PORT } from './config/env';




server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
server.get('/', () => {
    console.log('Hola mundo');
  }); 
