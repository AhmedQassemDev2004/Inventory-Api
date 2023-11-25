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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const role_decorator_1 = require("../user/auth/decorators/role.decorator");
const sale_service_1 = require("./sale.service");
const create_sale_dto_1 = require("./dto/create-sale.dto");
const user_decorator_1 = require("../user/auth/decorators/user.decorator");
const update_sale_dto_1 = require("./dto/update-sale.dto");
let SaleController = class SaleController {
    constructor(saleService) {
        this.saleService = saleService;
    }
    list() {
        return this.saleService.list();
    }
    listDaily() {
        return this.saleService.listDaily();
    }
    listMonthly() {
        return this.saleService.listMonthly();
    }
    create(userId, body) {
        return this.saleService.create(userId, body);
    }
    update(id, body) {
        return this.saleService.update(id, body);
    }
    delete(id) {
        return this.saleService.delete(id);
    }
};
exports.SaleController = SaleController;
__decorate([
    (0, common_1.Get)("/sale/list"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "list", null);
__decorate([
    (0, common_1.Get)("/sale/list/daily"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "listDaily", null);
__decorate([
    (0, common_1.Get)("/sale/list/monthly"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "listMonthly", null);
__decorate([
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN),
    (0, common_1.Post)("/create"),
    __param(0, (0, user_decorator_1.AuthUser)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_sale_dto_1.CreateSaleDto]),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "create", null);
__decorate([
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN, client_1.Role.SPECIAL),
    (0, common_1.Put)("/update/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_sale_dto_1.UpdateSaleDto]),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "update", null);
__decorate([
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN, client_1.Role.SPECIAL),
    (0, common_1.Delete)("/delete/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "delete", null);
exports.SaleController = SaleController = __decorate([
    (0, common_1.Controller)('sale'),
    __metadata("design:paramtypes", [sale_service_1.SaleService])
], SaleController);
//# sourceMappingURL=sale.controller.js.map