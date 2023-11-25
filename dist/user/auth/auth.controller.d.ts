import { RegisterDto } from '../dto/register.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<any>;
    register(body: RegisterDto, req: any): Promise<{
        id: number;
        name: string;
        password: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        lastLogin: Date;
    }>;
    logout(req: any): Promise<{
        message: string;
    }>;
}
