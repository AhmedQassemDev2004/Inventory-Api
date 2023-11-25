"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUser = void 0;
const common_1 = require("@nestjs/common");
exports.AuthUser = (0, common_1.createParamDecorator)((field = '', context) => {
    const request = context.switchToHttp().getRequest();
    if (field == '') {
        return request.user;
    }
    else {
        return request.user[field];
    }
});
//# sourceMappingURL=user.decorator.js.map