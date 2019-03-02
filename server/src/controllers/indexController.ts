import { Request, Response } from 'express';

class IndexController {
  public index(req: Request, res: Response) {
    res.json({ texto: 'API es /api/juegos' });
  }
}

export const indexController = new IndexController();