"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ texto: 'API es /api/juegos' });
    }
}
exports.indexController = new IndexController();
