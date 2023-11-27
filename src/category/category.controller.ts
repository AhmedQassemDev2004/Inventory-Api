import { Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category';
import { UpdateCategoryDto } from './dto/update-category';
import { Role } from '@prisma/client';
import { Roles } from 'src/user/auth/decorators/role.decorator';
import { ApiBody, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { CategoryResponse } from './dto/category-response.dto';

@ApiTags("Category")
@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @ApiResponse({
        status: 200,
        description: 'List of categories',
        type: [CategoryResponse] as any, // Use 'as any' to bypass TypeScript error
    })
    @Get("/list")
    async list() {
        return this.categoryService.list();
    }

    @ApiResponse({
        status: 200,
        description: 'Get specefic category',
        type: CategoryResponse, // Use 'as any' to bypass TypeScript error
    })
    @Get("/:id")
    async product(@Param("id", ParseIntPipe) id: number) {
        return this.categoryService.product(id);
    }


    @ApiBody({
        type: CreateCategoryDto
    })
    @ApiResponse({
        status: 200,
        description: 'Create new category',
        type: CategoryResponse, // Use 'as any' to bypass TypeScript error
    })
    @Roles(Role.ADMIN, Role.SPECIAL)
    @Post("/create")
    async create(body: CreateCategoryDto) {
        return this.categoryService.create(body);
    }

    @ApiBody({
        type: UpdateCategoryDto
    })
    @ApiResponse({
        status: 200,
        description: 'Update category',
        type: CategoryResponse, // Use 'as any' to bypass TypeScript error
    })
    @Roles(Role.ADMIN, Role.SPECIAL)
    @Put("/update/:id")
    async update(@Param("id", ParseIntPipe) id: number, body: UpdateCategoryDto) {
        return this.categoryService.update(id, body);
    }

    @Roles(Role.ADMIN, Role.SPECIAL)
    @Delete("/delete/:id")
    async delete(@Param("id", ParseIntPipe) id: number) {
        return this.categoryService.delete(id);
    }
}
