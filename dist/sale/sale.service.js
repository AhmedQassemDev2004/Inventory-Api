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
exports.SaleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const date_fns_1 = require("date-fns");
let SaleService = class SaleService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async list() {
        return this.prismaService.sale.findMany({
            include: {
                product: {
                    include: {
                        category: true
                    }
                },
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                }
            }
        });
    }
    async find(id) {
        const sale = this.prismaService.sale.findUnique({ where: { id } });
        if (!sale)
            throw new common_1.NotFoundException();
        return sale;
    }
    async listDaily() {
        const today = new Date();
        return this.prismaService.sale.findMany({
            where: {
                createdAt: {
                    gt: (0, date_fns_1.startOfDay)(today),
                    lt: (0, date_fns_1.endOfDay)(today)
                }
            },
            include: {
                product: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                }
            }
        });
    }
    async listMonthly() {
        const today = new Date();
        return await this.prismaService.sale.findMany({
            where: {
                createdAt: {
                    gt: (0, date_fns_1.startOfMonth)(today),
                    lt: (0, date_fns_1.endOfMonth)(today)
                }
            },
            include: {
                product: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                }
            }
        });
    }
    async create(userId, body) {
        const product = await this.prismaService.product.findUnique({
            where: { id: body.productId }
        });
        if (!product)
            throw new common_1.NotFoundException();
        return await this.prismaService.sale.create({
            data: {
                quantity: body.quantity,
                totalPrice: body.totalPrice,
                productId: body.productId,
                userId
            }
        });
    }
    async update(id, body) {
        return await this.prismaService.sale.update({
            where: { id },
            data: {
                ...body
            }
        });
    }
    async delete(id) {
        await this.prismaService.sale.delete({
            where: { id }
        });
        return {
            message: "Deleted succesfully"
        };
    }
};
exports.SaleService = SaleService;
exports.SaleService = SaleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SaleService);
//# sourceMappingURL=sale.service.js.map