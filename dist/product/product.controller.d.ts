import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    list(): Promise<{
        id: number;
        name: string;
        price: number;
        image: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    product(id: number): Promise<{
        category: {
            id: number;
            name: string;
        };
    } & {
        id: number;
        name: string;
        price: number;
        image: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(body: CreateProductDto): Promise<{
        id: number;
        name: string;
        price: number;
        image: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, body: UpdateProductDto): Promise<{
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
