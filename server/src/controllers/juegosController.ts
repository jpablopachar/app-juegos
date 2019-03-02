import { Request, Response } from 'express';

import pool from '../db/database';

class JuegosController {
  public index(req: Request, res: Response) {
    res.send('Juegos');
  }
}

export const juegosController = new JuegosController();