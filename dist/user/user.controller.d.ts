import { UpdateUserDto } from './dto/update.dto';
import { UserService } from './user.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { AddUserDto } from './dto/add-user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    update(userId: any, body: UpdateUserDto): Promise<{
        id: number;
        name: string;
        password: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        lastLogin: Date;
    }>;
    updateUser(userId: any, body: UpdateUserDto): Promise<{
        id: number;
        name: string;
        password: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        lastLogin: Date;
    }>;
    changePassword(userId: any, body: ChangePasswordDto): Promise<{
        message: string;
    }>;
    profile(user: any): Promise<any>;
    getUser(userId: any): Promise<{
        id: number;
        name: string;
        password: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        lastLogin: Date;
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
