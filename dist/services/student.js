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
exports.StudentService = void 0;
const student_1 = require("../entities/student");
class StudentService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            return yield student_1.Student.find();
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield student_1.Student.findOneBy({ id: id });
        });
        this.getByDni = (dni) => __awaiter(this, void 0, void 0, function* () {
            return yield student_1.Student.findOneBy({ dni: dni });
        });
        this.userExists = (dni, email) => __awaiter(this, void 0, void 0, function* () {
            return yield student_1.Student.findOne({
                where: [{ dni: dni }, { email: email }]
            });
        });
        this.createStundet = (student) => __awaiter(this, void 0, void 0, function* () {
            return yield student_1.Student.save(student);
        });
    }
}
exports.StudentService = StudentService;
