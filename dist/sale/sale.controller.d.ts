import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
export declare class SaleController {
    private saleService;
    constructor(saleService: SaleService);
    list(): Promise<({
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
        user: {
            name: string;
            id: number;
            email: string;
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
        product: {
            id: number;
            name: string;
            price: number;
            image: string;
            categoryId: number;
            createdAt: Date;
            updatedAt: Date;
        };
        user: {
            name: string;
            id: number;
            email: string;
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
        product: {
            id: number;
            name: string;
            price: number;
            image: string;
            categoryId: number;
            createdAt: Date;
            updatedAt: Date;
        };
        user: {
            name: string;
            id: number;
            email: string;
        };
    } & {
        id: number;
        quantity: number;
        totalPrice: number;
        productId: number;
        userId: number;
        createdAt: Date;
    })[]>;
    getSale(id: any): Promise<{
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
    }>;
    create(userId: any, body: CreateSaleDto): Promise<{
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
