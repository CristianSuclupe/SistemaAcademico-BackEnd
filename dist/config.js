"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = {
    port: process.env.PORT || 4000,
    dbPort: process.env.PORTDB ? parseInt(process.env.PORTDB) : 1433,
    username: process.env.NICKNAMEDB || '',
    password: process.env.PASSWORDDB || '',
    server: process.env.SERVERDB || '',
    database: process.env.DATABASE || '',
    secret: process.env.SECRET || ''
};
