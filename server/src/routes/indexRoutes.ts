import { Request, Response, Router } from 'express';

import { indexController } from '../controllers/indexController';

class IndexRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  config():void {
    this.router.get('/', indexController.index);
  }
}

const indexRoutes = new IndexRoutes();

indexRoutes.config();

export default indexRoutes.router;