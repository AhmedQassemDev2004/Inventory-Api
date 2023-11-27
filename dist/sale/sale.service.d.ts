import { CreateSaleDto } from './dto/create-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateSaleDto } from './dto/update-sale.dto';
export declare class SaleService {
    private prismaService;
    constructor(prismaService: PrismaService);
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
            id: number;
            name: string;
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
    find(id: number): Promise<{
        id: number;
        quantity: number;
        totalPrice: number;
        productId: number;
        userId: number;
        createdAt: Date;
    }>;
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
            id: number;
            name: string;
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
            id: number;
            name: string;
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
