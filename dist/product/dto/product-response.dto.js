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
exports.ProductResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const category_response_dto_1 = require("../../category/dto/category-response.dto");
class ProductResponse {
}
exports.ProductResponse = ProductResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 12
    }),
    __metadata("design:type", Number)
], ProductResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Product"
    }),
    __metadata("design:type", String)
], ProductResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 99
    }),
    __metadata("design:type", Number)
], ProductResponse.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: 1,
            name: "Cars"
        }
    }),
    __metadata("design:type", category_response_dto_1.CategoryResponse)
], ProductResponse.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2023-11-26T20:47:12.893Z"
    }),
    __metadata("design:type", String)
], ProductResponse.prototype, "createdAt", void 0);
//# sourceMappingURL=product-response.dto.js.map