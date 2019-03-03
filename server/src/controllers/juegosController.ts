import { Request, Response } from 'express';

import pool from '../db/database';

class JuegosController {
  public async listarJuegos(req: Request, res: Response): Promise<void> {
    const juegos = await pool.query('SELECT * FROM Juegos');

    res.json(juegos);
  }

  public async listarJuego(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const juego = await pool.query('SELECT * FROM Juegos WHERE idJuego = ?', [id]);

    // Si el juego existe
    if (juego.length > 0) return res.json(juego[0]);

    res.status(404).json({ mensaje: 'El juego no existe' });
  }

  public async crearJuego(req: Request, res: Response): Promise<void> {
    await pool.query('INSERT INTO Juegos set ?', [req.body]);
    res.json({ mensaje: 'Juego guardado' });
  }

  public async actualizarJuego(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    await pool.query('UPDATE Juegos set ? WHERE idJuego = ?', [req.body, id]);
    res.json({ mensaje: 'Juego actualizado' });
  }

  public async eliminarJuego(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    await pool.query('DELETE FROM Juegos WHERE idJuego = ?', [id]);
    res.json({ mensaje: 'Juego eliminado' });
  }
}

export const juegosController = new JuegosController();