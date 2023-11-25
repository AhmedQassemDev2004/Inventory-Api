import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role, User } from "@prisma/client";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.getAllAndOverride("roles", [
            context.getClass(),
            context.getHandler(),
        ]);

        const user: Partial<User> = context.switchToHttp().getRequest().user;

        if (user?.role == Role.ADMIN) {
            return true;
        }

        if (roles) {
            return roles.includes(user?.role);
        }

        // If no roles provided , pass
        return true;
    }
}
