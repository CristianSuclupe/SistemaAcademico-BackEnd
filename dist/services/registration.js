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
exports.RegistrationService = void 0;
const registration_1 = require("../entities/registration");
class RegistrationService {
    constructor() {
        this.createRegistration = (registration) => __awaiter(this, void 0, void 0, function* () {
            return yield registration_1.Registration.save(registration);
        });
        this.getAllStudensPerClass = (classId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const students = yield registration_1.Registration.getRepository()
                    .createQueryBuilder("registration")
                    .leftJoinAndSelect("registration.student", "student")
                    .where("registration.classId = :classId", { classId })
                    .select("student.id, student.name, student.surname, student.dni")
                    .orderBy("student.surname", "ASC")
                    .getRawMany();
                return {
                    students: students,
                };
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.RegistrationService = RegistrationService;
