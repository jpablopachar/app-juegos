import { Request, Response, Router } from 'express';

class IndexRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  config():void {
    this.router.get('/', (req, res) => res.send('Hola'));
  }
}

const indexRoutes = new IndexRoutes();

indexRoutes.config();

export default indexRoutes.router;