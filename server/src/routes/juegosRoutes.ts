import { Request, Response, Router } from 'express';

class JuegosRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  config():void {
    this.router.get('/juegos', (req, res) => res.send('Juegos'));
  }
}

const juegosRoutes = new JuegosRoutes();

juegosRoutes.config();

export default juegosRoutes.router;