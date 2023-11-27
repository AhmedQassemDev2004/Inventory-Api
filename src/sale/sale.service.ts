import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { endOfDay, endOfMonth, startOfDay, startOfMonth } from 'date-fns';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Injectable()
export class SaleService {
    constructor(private prismaService: PrismaService) { }

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

    async find(id: number) {
        const sale = this.prismaService.sale.findUnique({ where: { id } });
        if (!sale) throw new NotFoundException();
        return sale;
    }

    async listDaily() {
        const today = new Date();
        return this.prismaService.sale.findMany({
            where: {
                createdAt: {
                    gt: startOfDay(today),
                    lt: endOfDay(today)
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
        })
    }

    async listMonthly() {
        const today = new Date();

        return await this.prismaService.sale.findMany({
            where: {
                createdAt: {
                    gt: startOfMonth(today),
                    lt: endOfMonth(today)
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
        })
    }

    async create(userId: number, body: CreateSaleDto) {
        const product = await this.prismaService.product.findUnique({
            where: { id: body.productId }
        });

        if (!product) throw new NotFoundException();

        return await this.prismaService.sale.create({
            data: {
                quantity: body.quantity,
                totalPrice: body.totalPrice,
                productId: body.productId,
                userId
            }
        });
    }

    async update(id: number, body: UpdateSaleDto) {
        return await this.prismaService.sale.update({
            where: { id },
            data: {
                ...body
            }
        })
    }

    async delete(id: number) {
        await this.prismaService.sale.delete({
            where: { id }
        })

        return {
            message: "Deleted succesfully"
        }
    }

}
