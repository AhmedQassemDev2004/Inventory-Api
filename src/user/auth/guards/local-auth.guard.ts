import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const res = (await super.canActivate(context)) as boolean;
        const req = await context.switchToHttp().getRequest();

        await super.logIn(req);

        return res;
    }
}