"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const juegosRoutes_1 = __importDefault(require("./routes/juegosRoutes"));
class Servidor {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.rutas();
    }
    config() {
        /*           Conexión a base de datos           */
        // Usa el puerto establecido o usa el puerto 3000
        this.app.set('port', process.env.PORT || 3000);
        /*                 Middleware                   */
        this.app.use(morgan_1.default('dev'));
        // Recibe los datos que vienen desde formularios
        this.app.use(express_1.default.urlencoded({ extended: false }));
        // Convierte los objetos a json
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
    }
    /*                    Rutas                      */
    rutas() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api', juegosRoutes_1.default);
        // this.app.use('/api', usuarioRoutes);
    }
    iniciar() {
        // Escucha en el puerto establecido
        this.app.listen(this.app.get('port'), () => console.log(`Servidor en puerto ${this.app.get('port')}`));
    }
}
const servidor = new Servidor();
servidor.iniciar();
