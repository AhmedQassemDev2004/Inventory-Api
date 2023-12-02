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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    cleanUser(user) {
        delete user.password;
        return user;
    }
    async findOne(email) {
        const user = await this.prismaService.user.findUnique({
            where: { email }
        });
        return user;
    }
    async findOneById(id) {
        const user = await this.prismaService.user.findUnique({
            where: { id }
        });
        return user;
    }
    async create(body) {
        const user = await this.prismaService.user.create({
            data: {
                name: body.name,
                password: await bcrypt.hash(body.password, 10),
                email: body.email,
            }
        });
        return this.cleanUser(user);
    }
    async updateLastLogin(id) {
        await this.prismaService.user.update({
            where: {
                id
            },
            data: {
                lastLogin: new Date()
            }
        });
    }
    async update(userId, body) {
        const user = await this.prismaService.user.update({
            where: { id: userId },
            data: {
                ...body
            }
        });
        return this.cleanUser(user);
    }
    async changePassword(userId, body) {
        let user = await this.findOneById(userId);
        if (!(await bcrypt.compare(body.oldPassword, user.password))) {
            throw new common_1.BadRequestException("Wrong old password");
        }
        await this.prismaService.user.update({
            where: { id: userId },
            data: {
                password: await bcrypt.hash(body.newPassword, 10)
            }
        });
        return {
            message: "Password changed successfully"
        };
    }
    async usersList() {
        const users = await this.prismaService.user.findMany();
        const cleanedUsers = users.map(user => this.cleanUser(user));
        return cleanedUsers;
    }
    async addUser(body) {
        const user = await this.prismaService.user.create({
            data: { ...body }
        });
        return this.cleanUser(user);
    }
    async deleteUser(userId) {
        await this.prismaService.user.delete({
            where: { id: userId }
        });
        return {
            message: "Deleted successfully"
        };
    }
    async getUser(userId) {
        let user = await this.findOneById(userId);
        delete user.password;
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map