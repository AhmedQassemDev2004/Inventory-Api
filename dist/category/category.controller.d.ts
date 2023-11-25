import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category';
import { UpdateCategoryDto } from './dto/update-category';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    list(): Promise<{
        id: number;
        name: string;
    }[]>;
    product(id: number): Promise<{
        id: number;
        name: string;
    }>;
    create(body: CreateCategoryDto): Promise<{
        id: number;
        name: string;
    }>;
    update(id: number, body: UpdateCategoryDto): Promise<{
        id: number;
        name: string;
        price: number;
        image: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
