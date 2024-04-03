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
exports.SecretaryController = void 0;
const httpResponse_1 = require("../utils/httpResponse");
const secretary_1 = require("../services/secretary");
class SecretaryController {
    constructor() {
        this.httpResponse = new httpResponse_1.HttpResponse();
        this.secretaryService = new secretary_1.SecretaryService();
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const secretarys = yield this.secretaryService.getAll();
                if (secretarys.length === 0)
                    return this.httpResponse.NotFound(res, 'No secretarys found');
                return this.httpResponse.Ok(res, secretarys);
            }
            catch (error) {
                return this.httpResponse.InternalServerError(res, 'No data');
            }
        });
    }
}
exports.SecretaryController = SecretaryController;
