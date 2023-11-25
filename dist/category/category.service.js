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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CategoryService = class CategoryService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async list() {
        return await this.prismaService.category.findMany();
    }
    async product(id) {
        return await this.prismaService.category.findUnique({ where: { id } });
    }
    async create(body) {
        return await this.prismaService.category.create({
            data: {
                name: body.name,
            }
        });
    }
    async update(id, body) {
        const category = await this.prismaService.category.findUnique({ where: { id } });
        if (!category)
            throw new common_1.NotFoundException();
        return this.prismaService.product.update({
            where: { id },
            data: {
                name: body.name
            }
        });
    }
    async delete(id) {
        await this.prismaService.category.delete({ where: { id } });
        return {
            message: "Deleted succesfully"
        };
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoryService);
//# sourceMappingURL=category.service.js.map