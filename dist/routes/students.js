"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudentRouter = void 0;
const express_1 = require("express");
const students_1 = require("../controllers/students");
const auth_1 = require("../middlewares/auth");
const createStudentRouter = () => {
    const authMiddleware = new auth_1.AuthMiddleware();
    const router = (0, express_1.Router)();
    const studentController = new students_1.StudentController();
    router.get('/', authMiddleware.auth(['teacher', 'secretary']), studentController.getAll);
    router.get('/:id', authMiddleware.auth(['teacher', 'secretary']), studentController.getById);
    router.get('/dni/:dni', authMiddleware.auth(['teacher', 'secretary']), studentController.getByDni);
    router.post('/', authMiddleware.auth(['secretary']), studentController.createStudent);
    // router.get(
    //   '/classcount/:classId',
    //   authMiddleware.auth,
    //   studentController.getNumberPerClass
    // )
    return router;
};
exports.createStudentRouter = createStudentRouter;
