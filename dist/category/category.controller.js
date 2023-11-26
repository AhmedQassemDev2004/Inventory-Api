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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("./category.service");
const create_category_1 = require("./dto/create-category");
const update_category_1 = require("./dto/update-category");
const client_1 = require("@prisma/client");
const role_decorator_1 = require("../user/auth/decorators/role.decorator");
const swagger_1 = require("@nestjs/swagger");
const category_response_dto_1 = require("./dto/category-response.dto");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    list() {
        return this.categoryService.list();
    }
    product(id) {
        return this.categoryService.product(id);
    }
    create(body) {
        return this.categoryService.create(body);
    }
    update(id, body) {
        return this.categoryService.update(id, body);
    }
    delete(id) {
        return this.categoryService.delete(id);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of categories',
        type: [category_response_dto_1.CategoryResponse],
    }),
    (0, common_1.Get)("/list"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "list", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Get specefic category',
        type: category_response_dto_1.CategoryResponse,
    }),
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "product", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: create_category_1.CreateCategoryDto
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Create new category',
        type: category_response_dto_1.CategoryResponse,
    }),
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN, client_1.Role.SPECIAL),
    (0, common_1.Post)("/create"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_1.CreateCategoryDto]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: update_category_1.UpdateCategoryDto
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Update category',
        type: category_response_dto_1.CategoryResponse,
    }),
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN, client_1.Role.SPECIAL),
    (0, common_1.Put)("/update/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_category_1.UpdateCategoryDto]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "update", null);
__decorate([
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN, client_1.Role.SPECIAL),
    (0, common_1.Delete)("/delete/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "delete", null);
exports.CategoryController = CategoryController = __decorate([
    (0, swagger_1.ApiTags)("Category"),
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
//# sourceMappingURL=category.controller.js.map