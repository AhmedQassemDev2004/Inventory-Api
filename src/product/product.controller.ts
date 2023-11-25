import { Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Role } from '@prisma/client';
import { Roles } from 'src/user/auth/decorators/role.decorator';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get("/list")
    list() {
        return this.productService.list();
    }

    @Get("/:id")
    product(@Param("id", ParseIntPipe) id: number) {
        return this.productService.product(id);
    }

    @Roles(Role.ADMIN)
    @Post("/create")
    create(body: CreateProductDto) {
        return this.productService.create(body);
    }

    @Roles(Role.ADMIN, Role.SPECIAL)
    @Put("/update/:id")
    update(@Param("id", ParseIntPipe) id: number, body: UpdateProductDto) {
        return this.productService.update(id, body);
    }

    @Roles(Role.ADMIN, Role.SPECIAL)
    @Delete("/delete/:id")
    delete(@Param("id", ParseIntPipe) id: number) {
        return this.productService.delete(id);
    }
}
