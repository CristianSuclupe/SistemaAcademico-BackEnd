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
exports.RegisterNotes = void 0;
const typeorm_1 = require("typeorm");
const academicProduct_1 = require("./academicProduct");
const class_1 = require("./class");
const student_1 = require("./student");
let RegisterNotes = class RegisterNotes extends typeorm_1.BaseEntity {
};
exports.RegisterNotes = RegisterNotes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RegisterNotes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], RegisterNotes.prototype, "score", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RegisterNotes.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => academicProduct_1.AcademicProduct, (academicProduct) => academicProduct.registerNotes),
    __metadata("design:type", academicProduct_1.AcademicProduct)
], RegisterNotes.prototype, "academicProduct", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => class_1.Class, (classAux) => classAux.registerNotes),
    __metadata("design:type", class_1.Class)
], RegisterNotes.prototype, "class", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_1.Student, (student) => student.registerNotes),
    __metadata("design:type", student_1.Student)
], RegisterNotes.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RegisterNotes.prototype, "updatedAt", void 0);
exports.RegisterNotes = RegisterNotes = __decorate([
    (0, typeorm_1.Entity)()
], RegisterNotes);
