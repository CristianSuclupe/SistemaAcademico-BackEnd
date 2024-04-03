"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSecretaryRouter = void 0;
const express_1 = require("express");
const secretarys_1 = require("../controllers/secretarys");
const auth_1 = require("../middlewares/auth");
const createSecretaryRouter = () => {
    const authMiddleware = new auth_1.AuthMiddleware();
    const router = (0, express_1.Router)();
    const secretaryController = new secretarys_1.SecretaryController();
    router.get('/', authMiddleware.auth(['secretary']), secretaryController.getAll);
    return router;
};
exports.createSecretaryRouter = createSecretaryRouter;
