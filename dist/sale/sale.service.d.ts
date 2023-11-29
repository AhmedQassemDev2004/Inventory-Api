import { CreateSaleDto } from './dto/create-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateSaleDto } from './dto/update-sale.dto';
export declare class SaleService {
    private prismaService;
    constructor(prismaService: PrismaService);
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
    find(id: number): Promise<{
        id: number;
        quantity: number;
        totalPrice: number;
        productId: number;
        userId: number;
        createdAt: Date;
    }>;
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
    create(userId: number, body: CreateSaleDto): Promise<{
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
