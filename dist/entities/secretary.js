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
exports.Secretary = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./user");
const registration_1 = require("./registration");
let Secretary = class Secretary extends user_1.User {
};
exports.Secretary = Secretary;
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Secretary.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => registration_1.Registration, (registration) => registration.secretary),
    __metadata("design:type", Array)
], Secretary.prototype, "registration", void 0);
exports.Secretary = Secretary = __decorate([
    (0, typeorm_1.Entity)()
], Secretary);
