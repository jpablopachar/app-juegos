"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const juegosController_1 = require("../controllers/juegosController");
class JuegosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/juegos', juegosController_1.juegosController.listarJuegos);
        this.router.get('/juego/:id', juegosController_1.juegosController.listarJuego);
        this.router.post('/juego', juegosController_1.juegosController.crearJuego);
        this.router.put('/juego/:id', juegosController_1.juegosController.actualizarJuego);
        this.router.delete('/juego/:id', juegosController_1.juegosController.eliminarJuego);
    }
}
const juegosRoutes = new JuegosRoutes();
juegosRoutes.config();
exports.default = juegosRoutes.router;
