"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const moment_1 = __importDefault(require("moment"));
const config_1 = __importDefault(require("../config"));
class JwtService {
    constructor() {
        this.createToken = (user) => {
            const payload = {
                id: user.id,
                name: user.name,
                surname: user.surname,
                email: user.email,
                cellPhone: user.cell_phone,
                genre: user.genre,
                dni: user.dni,
                rol: user.rol,
                iat: (0, moment_1.default)().unix(),
                exp: (0, moment_1.default)().add(1, 'days').unix()
            };
            return jwt_simple_1.default.encode(payload, config_1.default.secret);
        };
        this.decodeToken = (token) => {
            return jwt_simple_1.default.decode(token, config_1.default.secret);
        };
    }
}
exports.JwtService = JwtService;
exports.default = JwtService;
