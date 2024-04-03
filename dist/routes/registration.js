"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRegistrationRouter = void 0;
const express_1 = require("express");
const registration_1 = require("../controllers/registration");
const auth_1 = require("../middlewares/auth");
const createRegistrationRouter = () => {
    const authMiddleware = new auth_1.AuthMiddleware();
    const router = (0, express_1.Router)();
    const registrationController = new registration_1.RegistrationController();
    router.post('/', authMiddleware.auth(['secretary']), registrationController.createRegistration);
    router.get('/class/:classId', authMiddleware.auth(['teacher']), registrationController.getAllStudensPerClass);
    return router;
};
exports.createRegistrationRouter = createRegistrationRouter;
