import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { AddUserDto } from './dto/add-user.dto';
export declare class UserService {
    private prismaService;
    constructor(prismaService: PrismaService);
    cleanUser(user: User): {
        id: number;
        name: string;
        password: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        lastLogin: Date;
    };
    findOne(email: string): Promise<User | null>;
    findOneById(id: number): Promise<User | null>;
    create(body: Partial<User>): Promise<{
        id: number;
        name: string;
        password: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        lastLogin: Date;
    }>;
    updateLastLogin(id: number): Promise<void>;
    update(userId: number, body: UpdateUserDto): Promise<{
        id: number;
        name: string;
        password: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        lastLogin: Date;
    }>;
    changePassword(userId: number, body: ChangePasswordDto): Promise<{
        message: string;
    }>;
    usersList(): Promise<{
        id: number;
        name: string;
        password: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        lastLogin: Date;
    }[]>;
    addUser(body: AddUserDto): Promise<{
        id: number;
        name: string;
        password: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        lastLogin: Date;
    }>;
    deleteUser(userId: number): Promise<{
        message: string;
    }>;
}
