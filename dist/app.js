"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const students_1 = require("./routes/students");
const secretarys_1 = require("./routes/secretarys");
const class_1 = require("./routes/class");
const auth_1 = require("./routes/auth");
const registration_1 = require("./routes/registration");
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/auth", (0, auth_1.createAuthRouter)());
app.use("/api/student", (0, students_1.createStudentRouter)());
app.use("/api/secretary", (0, secretarys_1.createSecretaryRouter)());
app.use("/api/class", (0, class_1.createClassRouter)());
app.use("/api/registration", (0, registration_1.createRegistrationRouter)());
app.use("/api", (_req, res) => {
    res.send("Hello World");
});
exports.default = app;
