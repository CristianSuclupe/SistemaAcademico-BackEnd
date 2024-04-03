"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateData = exports.findUser = exports.encryptPassword = exports.validatePassword = exports.getRol = exports.isValidGuid = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const teacher_1 = require("../entities/teacher");
const secretary_1 = require("../entities/secretary");
const isValidGuid = (guid) => {
    const guidRegex = /^[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$/;
    return guidRegex.test(guid);
};
exports.isValidGuid = isValidGuid;
const getRol = (type) => {
    if (type === 'Profesor')
        return 'teacher';
    if (type === 'Secretario académico')
        return 'secretary';
    return null;
};
exports.getRol = getRol;
const validatePassword = (password, passwordEncrypted) => __awaiter(void 0, void 0, void 0, function* () {
    const passwordDecrypted = yield bcrypt_1.default.compareSync(password, passwordEncrypted);
    return passwordDecrypted;
});
exports.validatePassword = validatePassword;
const encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.hash(password, 10);
});
exports.encryptPassword = encryptPassword;
const findUser = (userType, user) => __awaiter(void 0, void 0, void 0, function* () {
    const rol = userType.toLowerCase();
    if (rol === 'profesor')
        return yield teacher_1.Teacher.findOne({
            where: [{ email: user }, { dni: user }]
        });
    else if (rol === 'secretario académico')
        return yield secretary_1.Secretary.findOne({
            where: [{ email: user }, { dni: user }]
        });
    return null;
});
exports.findUser = findUser;
const validateData = (dataUser, dataModel) => {
    const { rol } = dataModel, rest = __rest(dataModel, ["rol"]);
    const propsDataModel = Object.keys(rest).sort();
    const propsDataUser = Object.keys(dataUser).sort();
    if (JSON.stringify(propsDataModel) !== JSON.stringify(propsDataUser))
        return false;
    for (const prop in dataUser) {
        let text = dataUser[prop].trim();
        if (dataUser[prop] === null || text === '')
            return false;
    }
    return true;
};
exports.validateData = validateData;
