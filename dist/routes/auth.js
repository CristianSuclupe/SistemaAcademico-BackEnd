"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthRouter = void 0;
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const createAuthRouter = () => {
    const router = (0, express_1.Router)();
    const authController = new auth_1.AuthController();
    router.post('/', authController.login);
    return router;
};
exports.createAuthRouter = createAuthRouter;
