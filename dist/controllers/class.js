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
exports.ClassController = void 0;
const httpResponse_1 = require("../utils/httpResponse");
const class_1 = require("./../services/class");
const shared_1 = require("../utils/shared");
class ClassController {
    constructor() {
        this.httpResponse = new httpResponse_1.HttpResponse();
        this.classService = new class_1.ClassService();
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const classes = yield this.classService.getAll();
                if (classes.length === 0)
                    return this.httpResponse.NotFound(res, 'No classes found');
                return this.httpResponse.Ok(res, classes);
            }
            catch (error) {
                return this.httpResponse.InternalServerError(res, 'No data');
            }
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { classId } = req.params;
            if (!(0, shared_1.isValidGuid)(classId))
                return this.httpResponse.BadRequest(res, 'No classes found');
            try {
                const classFound = yield this.classService.getById(classId);
                if (!classFound)
                    return this.httpResponse.NotFound(res, 'No class found');
                return this.httpResponse.Ok(res, classFound);
            }
            catch (error) {
                return this.httpResponse.InternalServerError(res, 'No data');
            }
        });
        this.getByTeacher = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { teacherId } = req.params;
            if (!(0, shared_1.isValidGuid)(teacherId))
                return this.httpResponse.BadRequest(res, 'No classes found');
            try {
                const classes = yield this.classService.getByTeacher(teacherId);
                if (!classes || classes.length === 0)
                    return this.httpResponse.NotFound(res, 'No classes found');
                return this.httpResponse.Ok(res, classes);
            }
            catch (error) {
                return this.httpResponse.InternalServerError(res, 'No data');
            }
        });
    }
}
exports.ClassController = ClassController;
