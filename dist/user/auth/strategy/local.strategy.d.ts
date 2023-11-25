import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<Partial<{
        id: number;
        name: string;
        password: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        lastLogin: Date;
    }>>;
}
export {};
