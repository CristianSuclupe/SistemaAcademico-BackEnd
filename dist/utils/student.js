"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = void 0;
const student_1 = require("../entities/student");
const createStudent = (dataUser) => {
    const student = new student_1.Student();
    student.name = dataUser.name;
    student.surname = dataUser.surname;
    student.email = dataUser.email;
    student.cellPhone = dataUser.cellPhone;
    student.genre = dataUser.genre;
    student.dateOfBirth = dataUser.dateOfBirth;
    student.dni = dataUser.dni;
    student.rol = 'student';
    return student;
};
exports.createStudent = createStudent;
