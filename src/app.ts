import express from "express";
import cors from "cors";
import morgan from "morgan";
import { createStudentRouter } from "./routes/students";
import { createSecretaryRouter } from "./routes/secretarys";
import { createClassRouter } from "./routes/class";
import { createAuthRouter } from "./routes/auth";
import { createRegistrationRouter } from "./routes/registration";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", createAuthRouter());
app.use("/api/student", createStudentRouter());
app.use("/api/secretary", createSecretaryRouter());
app.use("/api/class", createClassRouter());
app.use("/api/registration", createRegistrationRouter());

export default app;
