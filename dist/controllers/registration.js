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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationController = void 0;
const httpResponse_1 = require("../utils/httpResponse");
const registration_1 = require("../services/registration");
const registration_2 = require("../utils/registration");
const shared_1 = require("../utils/shared");
class RegistrationController {
    constructor() {
        this.httpResponse = new httpResponse_1.HttpResponse();
        this.registrationService = new registration_1.RegistrationService();
        this.createRegistration = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const _a = req.body, { user } = _a, rest = __rest(_a, ["user"]);
            try {
                const registrationData = yield (0, registration_2.createRegistration)(rest);
                if (!registrationData || !(0, shared_1.validateData)(rest, registrationData))
                    return this.httpResponse.BadRequest(res, 'Invalid data');
                const registration = yield this.registrationService.createRegistration(registrationData);
                return this.httpResponse.Ok(res, registration);
            }
            catch (error) {
                return this.httpResponse.InternalServerError(res, 'No data');
            }
        });
        this.getAllStudensPerClass = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { classId } = req.params;
            if (!(0, shared_1.isValidGuid)(classId))
                return this.httpResponse.BadRequest(res, 'No class found');
            try {
                const result = yield this.registrationService.getAllStudensPerClass(classId);
                if (!result)
                    return this.httpResponse.NotFound(res, 'No found');
                return this.httpResponse.Ok(res, result);
            }
            catch (error) {
                return this.httpResponse.InternalServerError(res, 'No data');
            }
        });
    }
}
exports.RegistrationController = RegistrationController;
