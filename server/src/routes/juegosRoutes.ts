import { Request, Response, Router } from 'express';

import { juegosController } from '../controllers/juegosController';

class JuegosRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  config():void {
    this.router.get('/juegos', juegosController.index);
  }
}

const juegosRoutes = new JuegosRoutes();

juegosRoutes.config();

export default juegosRoutes.router;