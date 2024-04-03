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
exports.AcademicProduct = void 0;
const typeorm_1 = require("typeorm");
const class_1 = require("./class");
const registerNotes_1 = require("./registerNotes");
let AcademicProduct = class AcademicProduct extends typeorm_1.BaseEntity {
};
exports.AcademicProduct = AcademicProduct;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AcademicProduct.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Date)
], AcademicProduct.prototype, "deadLine", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], AcademicProduct.prototype, "productName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], AcademicProduct.prototype, "percentage", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => class_1.Class, (classAux) => classAux.academicProduct),
    __metadata("design:type", class_1.Class)
], AcademicProduct.prototype, "class", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => registerNotes_1.RegisterNotes, (registerNotes) => registerNotes.academicProduct),
    __metadata("design:type", Array)
], AcademicProduct.prototype, "registerNotes", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Date)
], AcademicProduct.prototype, "expirationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], AcademicProduct.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AcademicProduct.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AcademicProduct.prototype, "updatedAt", void 0);
exports.AcademicProduct = AcademicProduct = __decorate([
    (0, typeorm_1.Entity)()
], AcademicProduct);
