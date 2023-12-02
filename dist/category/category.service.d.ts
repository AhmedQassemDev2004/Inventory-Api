import { CreateCategoryDto } from './dto/create-category';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateCategoryDto } from './dto/update-category';
export declare class CategoryService {
    private prismaService;
    constructor(prismaService: PrismaService);
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
    }>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
