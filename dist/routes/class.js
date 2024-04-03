"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClassRouter = void 0;
const express_1 = require("express");
const class_1 = require("../controllers/class");
const auth_1 = require("../middlewares/auth");
const createClassRouter = () => {
    const authMiddleware = new auth_1.AuthMiddleware();
    const router = (0, express_1.Router)();
    const classController = new class_1.ClassController();
    router.get('/', authMiddleware.auth(['secretary', 'teacher']), classController.getAll);
    router.get('/:classId', authMiddleware.auth(['secretary', 'teacher']), classController.getById);
    router.get('/teacher/:teacherId', authMiddleware.auth(['teacher']), classController.getByTeacher);
    return router;
};
exports.createClassRouter = createClassRouter;
