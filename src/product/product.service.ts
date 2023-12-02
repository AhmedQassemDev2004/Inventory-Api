import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
    constructor(private prismaService: PrismaService) { }

    async list() {
        return await this.prismaService.product.findMany();
    }

    async product(id: number) {
        return await this.prismaService.product.findUnique({
            where: { id },
            include: {
                category: true
            }
        });
    }

    async create(body: CreateProductDto) {
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

    async update(id: number, body: UpdateProductDto) {
        const product = await this.prismaService.product.findUnique({ where: { id } });
        if (!product)
            throw new NotFoundException();

        return this.prismaService.product.update({
            where: { id },
            data: {
                ...body
            }
        })
    }

    async delete(id: number) {
        await this.prismaService.product.delete({ where: { id } });
        return {
            message: "Deleted succesfully"
        }
    }

}
