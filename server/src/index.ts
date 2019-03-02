import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import juegosRoutes from './routes/juegosRoutes';

class Servidor {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.rutas();
  }

  config():void {
    /*           Conexión a base de datos           */
    
    // Usa el puerto establecido o usa el puerto 3000
    this.app.set('port', process.env.PORT || 3000);

    /*                 Middleware                   */
    this.app.use(morgan('dev'));
    // Recibe los datos que vienen desde formularios
    this.app.use(express.urlencoded({ extended: false }));
    // Convierte los objetos a json
    this.app.use(express.json());
    this.app.use(cors());
  }

  /*                    Rutas                      */
  rutas():void {
    this.app.use(indexRoutes);
    this.app.use('/api', juegosRoutes);
    // this.app.use('/api', usuarioRoutes);
  }

  iniciar():void {
    // Escucha en el puerto establecido
    this.app.listen(this.app.get('port'), () => console.log(`Servidor en puerto ${this.app.get('port')}`));
  }
}

const servidor = new Servidor();

servidor.iniciar();