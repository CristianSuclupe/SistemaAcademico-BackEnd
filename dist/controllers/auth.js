"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const httpResponse_1 = require("../utils/httpResponse");
const shared_1 = require("../utils/shared");
const jwt_1 = require("./../services/jwt");
class AuthController {
    constructor() {
        this.httpResponse = new httpResponse_1.HttpResponse();
        this.jwtService = new jwt_1.JwtService();
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { user, password, rol } = req.body;
            if (!rol)
                return this.httpResponse.BadRequest(res, "Invalid user type");
            try {
                const userSearched = yield (0, shared_1.findUser)(rol, user);
                const passwordSearched = userSearched
                    ? yield (0, shared_1.validatePassword)(password, userSearched.password)
                    : false;
                if (!userSearched || !passwordSearched)
                    return this.httpResponse.NotFound(res, "Incorrect user or password");
                const token = this.jwtService.createToken(userSearched);
                return this.httpResponse.Ok(res, token);
            }
            catch (error) {
                return this.httpResponse.InternalServerError(res, "No data");
            }
        });
    }
}
exports.AuthController = AuthController;
