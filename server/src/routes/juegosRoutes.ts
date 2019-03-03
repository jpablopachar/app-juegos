import { Request, Response, Router } from 'express';

import { juegosController } from '../controllers/juegosController';

class JuegosRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  config():void {
    this.router.get('/juegos', juegosController.listarJuegos);
    this.router.get('/juego/:id', juegosController.listarJuego);
    this.router.get('/juego', juegosController.crearJuego);
    this.router.get('/juego/:id', juegosController.actualizarJuego);
    this.router.get('/juego/:id', juegosController.eliminarJuego);
  }
}

const juegosRoutes = new JuegosRoutes();

juegosRoutes.config();

export default juegosRoutes.router;