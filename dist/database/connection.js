"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const config_1 = __importDefault(require("../config"));
const teacher_1 = require("../entities/teacher");
const student_1 = require("../entities/student");
const secretary_1 = require("../entities/secretary");
const registration_1 = require("../entities/registration");
const registerNotes_1 = require("../entities/registerNotes");
const course_1 = require("../entities/course");
const class_1 = require("../entities/class");
const academicProduct_1 = require("../entities/academicProduct");
const calendar_1 = require("../entities/calendar");
const announcement_1 = require("../entities/announcement");
const archive_1 = require("../entities/archive");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: config_1.default.urlDb,
    entities: [
        teacher_1.Teacher,
        student_1.Student,
        secretary_1.Secretary,
        registration_1.Registration,
        registerNotes_1.RegisterNotes,
        course_1.Course,
        class_1.Class,
        academicProduct_1.AcademicProduct,
        calendar_1.Calendar,
        announcement_1.Announcement,
        archive_1.Archive,
    ],
    synchronize: true,
});
