import { UserService } from '../user.service';
import { User } from '@prisma/client';
import { RegisterDto } from '../dto/register.dto';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    validateUser(email: string, password: string): Promise<Partial<User> | null>;
    registerUser(body: RegisterDto): Promise<{
        id: number;
        name: string;
        password: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        lastLogin: Date;
    }>;
}
