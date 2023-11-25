import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from "bcrypt";
import { UpdateUserDto } from './dto/update.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { AddUserDto } from './dto/add-user.dto';
@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) { }

    cleanUser(user: User) {
        delete user.password;
        return user;
    }

    async findOne(email: string): Promise<User | null> {
        const user = await this.prismaService.user.findUnique({
            where: { email }
        });
        return user;
    }

    async findOneById(id: number): Promise<User | null> {
        const user = await this.prismaService.user.findUnique({
            where: { id }
        });
        return user;
    }

    async create(body: Partial<User>) {
        const user = await this.prismaService.user.create({
            data: {
                name: body.name,
                password: await bcrypt.hash(body.password, 10),
                email: body.email,
            }
        });

        return this.cleanUser(user);
    }

    async updateLastLogin(id: number) {
        await this.prismaService.user.update({
            where: {
                id
            },
            data: {
                lastLogin: new Date()
            }
        })
    }

    async update(userId: number, body: UpdateUserDto) {
        const user = await this.prismaService.user.update({
            where: { id: userId },
            data: {
                ...body
            }
        });

        return this.cleanUser(user);
    }

    async changePassword(userId: number, body: ChangePasswordDto) {
        let user = await this.findOneById(userId);

        if (!(await bcrypt.compare(body.oldPassword, user.password))) {
            throw new BadRequestException("Wrong old password")
        }

        await this.prismaService.user.update({
            where: { id: userId },
            data: {
                password: await bcrypt.hash(body.newPassword, 10)
            }
        });

        return {
            message: "Password changed successfully"
        }
    }

    async usersList() {
        const users = await this.prismaService.user.findMany();
        const cleanedUsers = users.map(user => this.cleanUser(user));
        return cleanedUsers;
    }

    async addUser(body: AddUserDto) {
        const user = await this.prismaService.user.create({
            data: { ...body }
        })

        return this.cleanUser(user);
    }

    async deleteUser(userId: number) {
        await this.prismaService.user.delete({
            where: { id: userId }
        });

        return {
            message: "Deleted successfully"
        }
    }
}
