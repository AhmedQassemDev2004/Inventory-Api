import { Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category';
import { UpdateCategoryDto } from './dto/update-category';
import { Role } from '@prisma/client';
import { Roles } from 'src/user/auth/decorators/role.decorator';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Get("/list")
    list() {
        return this.categoryService.list();
    }

    @Get("/:id")
    product(@Param("id", ParseIntPipe) id: number) {
        return this.categoryService.product(id);
    }

    @Roles(Role.ADMIN, Role.SPECIAL)
    @Post("/create")
    create(body: CreateCategoryDto) {
        return this.categoryService.create(body);
    }

    @Roles(Role.ADMIN, Role.SPECIAL)
    @Put("/update/:id")
    update(@Param("id", ParseIntPipe) id: number, body: UpdateCategoryDto) {
        return this.categoryService.update(id, body);
    }

    @Roles(Role.ADMIN, Role.SPECIAL)
    @Delete("/delete/:id")
    delete(@Param("id", ParseIntPipe) id: number) {
        return this.categoryService.delete(id);
    }
}
