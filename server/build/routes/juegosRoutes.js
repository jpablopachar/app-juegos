"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class JuegosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/juegos', (req, res) => res.send('Juegos'));
    }
}
const juegosRoutes = new JuegosRoutes();
juegosRoutes.config();
exports.default = juegosRoutes.router;
