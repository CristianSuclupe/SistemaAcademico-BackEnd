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
exports.ClassService = void 0;
const class_1 = require("../entities/class");
class ClassService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            return yield class_1.Class.getRepository()
                .createQueryBuilder('class')
                .leftJoinAndSelect('class.teacher', 'teacher')
                .leftJoinAndSelect('class.course', 'course')
                .getMany();
        });
        this.getById = (classId) => __awaiter(this, void 0, void 0, function* () {
            return yield class_1.Class.getRepository()
                .createQueryBuilder('class')
                .leftJoinAndSelect('class.teacher', 'teacher')
                .leftJoinAndSelect('class.course', 'course')
                .where('class.id = :classId', { classId })
                .getOne();
        });
        this.getByTeacher = (teacherId) => __awaiter(this, void 0, void 0, function* () {
            return yield class_1.Class.getRepository()
                .createQueryBuilder('class')
                .leftJoinAndSelect('class.course', 'course')
                .where('class.teacherId = :teacherId', { teacherId })
                .getMany();
        });
    }
}
exports.ClassService = ClassService;
