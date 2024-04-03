"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registration = void 0;
const typeorm_1 = require("typeorm");
const student_1 = require("./student");
const class_1 = require("./class");
const secretary_1 = require("./secretary");
let Registration = class Registration extends typeorm_1.BaseEntity {
};
exports.Registration = Registration;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Registration.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_1.Student, (student) => student.registration),
    __metadata("design:type", student_1.Student)
], Registration.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => class_1.Class, (classAux) => classAux.registration),
    __metadata("design:type", class_1.Class)
], Registration.prototype, "class", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => secretary_1.Secretary, (secretary) => secretary.registration),
    __metadata("design:type", secretary_1.Secretary)
], Registration.prototype, "secretary", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Registration.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Registration.prototype, "updatedAt", void 0);
exports.Registration = Registration = __decorate([
    (0, typeorm_1.Entity)()
], Registration);
