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
exports.StudentController = void 0;
const httpResponse_1 = require("../utils/httpResponse");
const shared_1 = require("../utils/shared");
const student_1 = require("../utils/student");
const student_2 = require("../services/student");
class StudentController {
    constructor() {
        this.httpResponse = new httpResponse_1.HttpResponse();
        this.stundetServive = new student_2.StudentService();
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const students = yield this.stundetServive.getAll();
                if (students.length === 0) {
                    return this.httpResponse.NotFound(res, 'No students found');
                }
                return this.httpResponse.Ok(res, students);
            }
            catch (error) {
                return this.httpResponse.InternalServerError(res, 'No data');
            }
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const student = yield this.stundetServive.getById(id);
                if (!student)
                    return this.httpResponse.NotFound(res, 'No student found');
                return this.httpResponse.Ok(res, student);
            }
            catch (error) {
                return this.httpResponse.InternalServerError(res, 'No data');
            }
        });
        this.getByDni = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni } = req.params;
            try {
                const student = yield this.stundetServive.getByDni(dni);
                if (!student)
                    return this.httpResponse.NotFound(res, 'No student found');
                return this.httpResponse.Ok(res, student);
            }
            catch (error) {
                return this.httpResponse.InternalServerError(res, 'No data');
            }
        });
        this.createStudent = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const _a = req.body, { user } = _a, rest = __rest(_a, ["user"]);
            const studentData = (0, student_1.createStudent)(rest);
            if (!(0, shared_1.validateData)(rest, studentData))
                return this.httpResponse.BadRequest(res, 'Invalid data');
            const studentExist = yield this.stundetServive.userExists(studentData.dni, studentData.email);
            if (studentExist)
                return this.httpResponse.BadRequest(res, 'The dni and/or e-mail already exist');
            try {
                const newStudent = yield this.stundetServive.createStundet(studentData);
                return this.httpResponse.Ok(res, newStudent);
            }
            catch (error) {
                return this.httpResponse.InternalServerError(res, 'No data');
            }
        });
        // getNumberPerClass = async (req: Request, res: Response) => {
        //   const { classId } = req.params
        //   try {
        //     const count: number = await this.studentModel.getNumberPerClass(classId)
        //     return this.httpResponse.Ok(res, count)
        //   } catch (error) {
        //     return this.httpResponse.InternalServerError(res, 'No data')
        //   }
        // }
    }
}
exports.StudentController = StudentController;
