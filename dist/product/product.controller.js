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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const client_1 = require("@prisma/client");
const role_decorator_1 = require("../user/auth/decorators/role.decorator");
const swagger_1 = require("@nestjs/swagger");
const product_response_dto_1 = require("./dto/product-response.dto");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async list() {
        return this.productService.list();
    }
    async product(id) {
        return this.productService.product(id);
    }
    async create(body) {
        return this.productService.create(body);
    }
    async update(id, body) {
        return this.productService.update(id, body);
    }
    async delete(id) {
        return this.productService.delete(id);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, swagger_1.ApiResponse)({
        type: [product_response_dto_1.ProductResponse]
    }),
    (0, common_1.Get)("/list"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "list", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: product_response_dto_1.ProductResponse
    }),
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "product", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: create_product_dto_1.CreateProductDto
    }),
    (0, swagger_1.ApiResponse)({
        type: product_response_dto_1.ProductResponse
    }),
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN),
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: update_product_dto_1.UpdateProductDto
    }),
    (0, swagger_1.ApiResponse)({
        type: product_response_dto_1.ProductResponse
    }),
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN, client_1.Role.SPECIAL),
    (0, common_1.Put)("/update/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN, client_1.Role.SPECIAL),
    (0, common_1.Delete)("/delete/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "delete", null);
exports.ProductController = ProductController = __decorate([
    (0, swagger_1.ApiTags)("Product"),
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map