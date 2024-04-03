"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const jwt_1 = __importDefault(require("../services/jwt"));
const moment_1 = __importDefault(require("moment"));
const httpResponse_1 = require("../utils/httpResponse");
class AuthMiddleware {
    constructor() {
        this.jwtService = new jwt_1.default();
        this.httpResponse = new httpResponse_1.HttpResponse();
        this.auth = (allowedRoles) => {
            return (req, res, next) => {
                if (!req.headers.authorization)
                    return this.httpResponse.Forbidden(res);
                const token = req.headers.authorization.replace(/['"]+/g, '');
                try {
                    const payload = this.jwtService.decodeToken(token);
                    if (allowedRoles.includes(payload.rol)) {
                        if (payload.exp <= (0, moment_1.default)().unix())
                            return this.httpResponse.Unauthorized(res, 'Token expired');
                        req.body.user = payload;
                        return next();
                    }
                    else
                        return this.httpResponse.Unauthorized(res, 'Unauthorized role');
                }
                catch (error) {
                    this.httpResponse.InternalServerError(res, 'No data');
                }
            };
        };
    }
}
exports.AuthMiddleware = AuthMiddleware;
