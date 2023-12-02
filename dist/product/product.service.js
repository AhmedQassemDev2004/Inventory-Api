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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductService = class ProductService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async list() {
        return await this.prismaService.product.findMany();
    }
    async product(id) {
        return await this.prismaService.product.findUnique({
            where: { id },
            include: {
                category: true
            }
        });
    }
    async create(body) {
        return await this.prismaService.product.create({
            data: {
                name: body.name,
                price: body.price,
                image: body?.image,
                category: {
                    connect: { id: body.categoryId }
                }
            }
        });
    }
    async update(id, body) {
        const product = await this.prismaService.product.findUnique({ where: { id } });
        if (!product)
            throw new common_1.NotFoundException();
        return this.prismaService.product.update({
            where: { id },
            data: {
                ...body
            }
        });
    }
    async delete(id) {
        await this.prismaService.product.delete({ where: { id } });
        return {
            message: "Deleted succesfully"
        };
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map