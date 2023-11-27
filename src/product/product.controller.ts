import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Role } from '@prisma/client';
import { Roles } from 'src/user/auth/decorators/role.decorator';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductResponse } from './dto/product-response.dto';

@ApiTags("Product")
@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @ApiResponse({
        type: [ProductResponse]
    })
    @Get("/list")
    async list() {
        return this.productService.list();
    }

    @ApiResponse({
        type: ProductResponse
    })
    @Get("/:id")
    async product(@Param("id", ParseIntPipe) id: number) {
        return this.productService.product(id);
    }

    @ApiBody({
        type: CreateProductDto
    })
    @ApiResponse({
        type: ProductResponse
    })
    @Roles(Role.ADMIN)
    @Post("/create")
    async create(@Body() body: CreateProductDto) {
        return this.productService.create(body);
    }

    @ApiBody({
        type: UpdateProductDto
    })
    @ApiResponse({
        type: ProductResponse
    })
    @Roles(Role.ADMIN, Role.SPECIAL)
    @Put("/update/:id")
    async update(@Param("id", ParseIntPipe) id: number, @Body() body: UpdateProductDto) {
        return this.productService.update(id, body);
    }

    @Roles(Role.ADMIN, Role.SPECIAL)
    @Delete("/delete/:id")
    async delete(@Param("id", ParseIntPipe) id: number) {
        return this.productService.delete(id);
    }
}
