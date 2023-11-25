import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    async canActivate(context: ExecutionContext) {
        const isPublic = this.reflector.getAllAndOverride("isPublic", [
            context.getClass(),
            context.getHandler(),
        ]);

        if (isPublic) return true;

        const request = context.switchToHttp().getRequest();
        return request.isAuthenticated();
    }
}