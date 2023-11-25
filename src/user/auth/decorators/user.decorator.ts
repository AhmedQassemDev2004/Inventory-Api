import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const AuthUser = createParamDecorator((field: string = '', context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    if (field == '') {
        return request.user;
    } else {
        return request.user[field];
    }
});