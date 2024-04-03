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
exports.createRegistration = void 0;
const registration_1 = require("../entities/registration");
const createRegistration = (registrationData) => __awaiter(void 0, void 0, void 0, function* () {
    const registration = new registration_1.Registration();
    registration.student = registrationData.student;
    registration.class = registrationData.class;
    registration.secretary = registrationData.secretary;
    return registration;
});
exports.createRegistration = createRegistration;
