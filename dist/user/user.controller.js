"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const update_dto_1 = require("./dto/update.dto");
const user_service_1 = require("./user.service");
const user_decorator_1 = require("./auth/decorators/user.decorator");
const change_password_dto_1 = require("./dto/change-password.dto");
const role_decorator_1 = require("./auth/decorators/role.decorator");
const client_1 = require("@prisma/client");
const add_user_dto_1 = require("./dto/add-user.dto");
const swagger_1 = require("@nestjs/swagger");
const user_response_dto_1 = require("./dto/user-response.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async update(userId, body) {
        return this.userService.update(userId, body);
    }
    async updateUser(userId, body) {
        return this.userService.update(userId, body);
    }
    async changePassword(userId, body) {
        return this.userService.changePassword(userId, body);
    }
    async profile(user) {
        return user;
    }
    async usersList() {
        return this.userService.usersList();
    }
    async addUser(body) {
        return this.userService.addUser(body);
    }
    async deleteUser(userId) {
        return this.userService.deleteUser(userId);
    }
};
exports.UserController = UserController;
__decorate([
    (0, swagger_1.ApiResponse)({
        type: user_response_dto_1.UserResponseDto
    }),
    (0, common_1.Put)("/update"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, user_decorator_1.AuthUser)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: user_response_dto_1.UserResponseDto
    }),
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN),
    (0, common_1.Put)("/update/:userId"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)("userId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Put)("/change-password"),
    __param(0, (0, user_decorator_1.AuthUser)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_password_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changePassword", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: user_response_dto_1.UserResponseDto
    }),
    (0, common_1.Get)("/profile"),
    __param(0, (0, user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "profile", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: [user_response_dto_1.UserResponseDto]
    }),
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN),
    (0, common_1.Get)("/list"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "usersList", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: [user_response_dto_1.UserResponseDto]
    }),
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN),
    (0, common_1.Post)("/add"),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_user_dto_1.AddUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addUser", null);
__decorate([
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN),
    (0, common_1.Delete)("/delete/:userId"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)("userId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)("User"),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map