import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
export declare class SaleController {
    private saleService;
    constructor(saleService: SaleService);
    list(): Promise<({
        user: {
            name: string;
            email: string;
            id: number;
        };
        product: {
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
        };
    } & {
        id: number;
        quantity: number;
        totalPrice: number;
        productId: number;
        userId: number;
        createdAt: Date;
    })[]>;
    listDaily(): Promise<({
        user: {
            name: string;
            email: string;
            id: number;
        };
        product: {
            id: number;
            name: string;
            price: number;
            image: string;
            categoryId: number;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        quantity: number;
        totalPrice: number;
        productId: number;
        userId: number;
        createdAt: Date;
    })[]>;
    listMonthly(): Promise<({
        user: {
            name: string;
            email: string;
            id: number;
        };
        product: {
            id: number;
            name: string;
            price: number;
            image: string;
            categoryId: number;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        quantity: number;
        totalPrice: number;
        productId: number;
        userId: number;
        createdAt: Date;
    })[]>;
    create(userId: any, body: CreateSaleDto): Promise<import("@nestjs/common").NotFoundException | {
        id: number;
        quantity: number;
        totalPrice: number;
        productId: number;
        userId: number;
        createdAt: Date;
    }>;
    update(id: number, body: UpdateSaleDto): Promise<{
        id: number;
        quantity: number;
        totalPrice: number;
        productId: number;
        userId: number;
        createdAt: Date;
    }>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
