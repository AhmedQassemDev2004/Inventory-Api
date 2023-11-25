"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
const auth_controller_1 = require("./auth/auth.controller");
const auth_service_1 = require("./auth/auth.service");
const local_strategy_1 = require("./auth/strategy/local.strategy");
const session_serializer_1 = require("./auth/serialiszers/session.serializer");
const prisma_module_1 = require("../prisma/prisma.module");
const passport_1 = require("@nestjs/passport");
const core_1 = require("@nestjs/core");
const auth_guard_1 = require("./auth/guards/auth.guard");
const role_guard_1 = require("./auth/guards/role.guard");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, passport_1.PassportModule.register({ session: true })],
        providers: [
            user_service_1.UserService,
            auth_service_1.AuthService,
            local_strategy_1.LocalStrategy,
            session_serializer_1.SessionSerializer,
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthenticatedGuard
            },
            {
                provide: core_1.APP_GUARD,
                useClass: role_guard_1.RolesGuard
            }
        ],
        controllers: [user_controller_1.UserController, auth_controller_1.AuthController]
    })
], UserModule);
//# sourceMappingURL=user.module.js.map