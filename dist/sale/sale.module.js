"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleModule = void 0;
const common_1 = require("@nestjs/common");
const sale_service_1 = require("./sale.service");
const sale_controller_1 = require("./sale.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let SaleModule = class SaleModule {
};
exports.SaleModule = SaleModule;
exports.SaleModule = SaleModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [sale_service_1.SaleService],
        controllers: [sale_controller_1.SaleController]
    })
], SaleModule);
//# sourceMappingURL=sale.module.js.map