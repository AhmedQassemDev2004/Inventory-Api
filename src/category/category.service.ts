import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateCategoryDto } from './dto/update-category';

@Injectable()
export class CategoryService {
    constructor(private prismaService: PrismaService) { }

    async list() {
        return await this.prismaService.category.findMany();
    }

    async product(id: number) {
        return await this.prismaService.category.findUnique({ where: { id } });
    }

    async create(body: CreateCategoryDto) {
        return await this.prismaService.category.create({
            data: {
                name: body.name,
            }
        });
    }

    async update(id: number, body: UpdateCategoryDto) {
        const category = await this.prismaService.category.findUnique({ where: { id } });
        if (!category)
            throw new NotFoundException();

        return this.prismaService.product.update({
            where: { id },
            data: {
                name: body.name
            }
        })
    }

    async delete(id: number) {
        await this.prismaService.category.delete({ where: { id } });
        return {
            message: "Deleted succesfully"
        }
    }
}
