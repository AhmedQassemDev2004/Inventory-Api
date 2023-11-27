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
const swagger_1 = require("@nestjs/swagger");
const sale_response_dto_1 = require("./dto/sale-response.dto");
let SaleController = class SaleController {
    constructor(saleService) {
        this.saleService = saleService;
    }
    async list() {
        return this.saleService.list();
    }
    async listDaily() {
        return this.saleService.listDaily();
    }
    async listMonthly() {
        return this.saleService.listMonthly();
    }
    async create(userId, body) {
        return this.saleService.create(userId, body);
    }
    async update(id, body) {
        return this.saleService.update(id, body);
    }
    async delete(id) {
        return this.saleService.delete(id);
    }
};
exports.SaleController = SaleController;
__decorate([
    (0, swagger_1.ApiResponse)({
        type: [sale_response_dto_1.SaleResponse]
    }),
    (0, common_1.Get)("/list"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SaleController.prototype, "list", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: [sale_response_dto_1.SaleResponse]
    }),
    (0, common_1.Get)("/list/daily"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SaleController.prototype, "listDaily", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: [sale_response_dto_1.SaleResponse]
    }),
    (0, common_1.Get)("/list/monthly"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SaleController.prototype, "listMonthly", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: sale_response_dto_1.SaleResponse
    }),
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN),
    (0, common_1.Post)("/create"),
    __param(0, (0, user_decorator_1.AuthUser)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_sale_dto_1.CreateSaleDto]),
    __metadata("design:returntype", Promise)
], SaleController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: sale_response_dto_1.SaleResponse
    }),
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN, client_1.Role.SPECIAL),
    (0, common_1.Put)("/update/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_sale_dto_1.UpdateSaleDto]),
    __metadata("design:returntype", Promise)
], SaleController.prototype, "update", null);
__decorate([
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN, client_1.Role.SPECIAL),
    (0, common_1.Delete)("/delete/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SaleController.prototype, "delete", null);
exports.SaleController = SaleController = __decorate([
    (0, swagger_1.ApiTags)("Sale"),
    (0, common_1.Controller)('sale'),
    __metadata("design:paramtypes", [sale_service_1.SaleService])
], SaleController);
//# sourceMappingURL=sale.controller.js.map