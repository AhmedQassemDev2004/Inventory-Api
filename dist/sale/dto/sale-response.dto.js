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
exports.SaleResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const product_response_dto_1 = require("../../product/dto/product-response.dto");
const user_response_dto_1 = require("../../user/dto/user-response.dto");
class SaleResponse {
}
exports.SaleResponse = SaleResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1
    }),
    __metadata("design:type", Number)
], SaleResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2
    }),
    __metadata("design:type", Number)
], SaleResponse.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 99.9
    }),
    __metadata("design:type", Number)
], SaleResponse.prototype, "totalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            name: "Product 1",
            price: 49.9,
            category: {
                id: 1,
                category: "Category 1"
            }
        }
    }),
    __metadata("design:type", product_response_dto_1.ProductResponse)
], SaleResponse.prototype, "product", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            name: "Test",
            email: "test@gmail.com",
            role: "USER",
        }
    }),
    __metadata("design:type", user_response_dto_1.UserResponseDto)
], SaleResponse.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2023-11-26T20:47:12.893Z"
    }),
    __metadata("design:type", String)
], SaleResponse.prototype, "createdAt", void 0);
//# sourceMappingURL=sale-response.dto.js.map