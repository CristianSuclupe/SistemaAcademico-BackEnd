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
exports.Class = void 0;
const typeorm_1 = require("typeorm");
const teacher_1 = require("./teacher");
const course_1 = require("./course");
const academicProduct_1 = require("./academicProduct");
const registration_1 = require("./registration");
const registerNotes_1 = require("./registerNotes");
const announcement_1 = require("./announcement");
const archive_1 = require("./archive");
let Class = class Class extends typeorm_1.BaseEntity {
};
exports.Class = Class;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Class.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: true }),
    __metadata("design:type", Boolean)
], Class.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Class.prototype, "currentAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Class.prototype, "maximumCapacity", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Date)
], Class.prototype, "deadLine", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacher_1.Teacher, (teacher) => teacher.classes),
    __metadata("design:type", teacher_1.Teacher)
], Class.prototype, "teacher", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_1.Course, (course) => course.classes),
    __metadata("design:type", course_1.Course)
], Class.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => academicProduct_1.AcademicProduct, (academicProduct) => academicProduct.class),
    __metadata("design:type", Array)
], Class.prototype, "academicProduct", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => registration_1.Registration, (registration) => registration.class),
    __metadata("design:type", Array)
], Class.prototype, "registration", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => registerNotes_1.RegisterNotes, (registerNotes) => registerNotes.class),
    __metadata("design:type", Array)
], Class.prototype, "registerNotes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => announcement_1.Announcement, (announcement) => announcement.class),
    __metadata("design:type", Array)
], Class.prototype, "announcements", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => archive_1.Archive, (archive) => archive.class),
    __metadata("design:type", Array)
], Class.prototype, "archives", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Date)
], Class.prototype, "schedule", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Class.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Class.prototype, "updatedAt", void 0);
exports.Class = Class = __decorate([
    (0, typeorm_1.Entity)()
], Class);
