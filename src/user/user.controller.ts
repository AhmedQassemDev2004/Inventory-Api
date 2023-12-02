import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UpdateUserDto } from './dto/update.dto';
import { UserService } from './user.service';
import { AuthUser } from './auth/decorators/user.decorator';
import { ChangePasswordDto } from './dto/change-password.dto';
import { Roles } from './auth/decorators/role.decorator';
import { Role } from '@prisma/client';
import { AddUserDto } from './dto/add-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserResponseDto } from './dto/user-response.dto';

@ApiTags("User")
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @ApiResponse({
        type: UserResponseDto
    })
    @Put("/update")
    @HttpCode(200)
    async update(@AuthUser("id") userId, @Body() body: UpdateUserDto) {
        return this.userService.update(userId, body);
    }

    @ApiResponse({
        type: UserResponseDto
    })
    @Roles(Role.ADMIN)
    @Put("/update/:userId")
    @HttpCode(200)
    async updateUser(@Param("userId", ParseIntPipe) userId, @Body() body: UpdateUserDto) {
        return this.userService.update(userId, body);
    }


    @Put("/change-password")
    async changePassword(@AuthUser("id") userId, @Body() body: ChangePasswordDto) {
        return this.userService.changePassword(userId, body);
    }

    @ApiResponse({
        type: UserResponseDto
    })
    @Get("/profile")
    async profile(@AuthUser() user) {
        return user;
    }

    @ApiResponse({
        type: UserResponseDto
    })
    @Get("/profile/:userId")
    async getUser(@Param("userId", ParseIntPipe) userId) {
        return this.userService.getUser(userId);
    }

    @ApiResponse({
        type: [UserResponseDto]
    })
    @Roles(Role.ADMIN)
    @Get("/list")
    async usersList() {
        return this.userService.usersList();
    }

    @ApiResponse({
        type: [UserResponseDto]
    })
    @Roles(Role.ADMIN)
    @Post("/add")
    @HttpCode(201)
    async addUser(@Body() body: AddUserDto) {
        return this.userService.addUser(body);
    }

    @Roles(Role.ADMIN)
    @Delete("/delete/:userId")
    @HttpCode(200)
    async deleteUser(@Param("userId", ParseIntPipe) userId: number) {
        return this.userService.deleteUser(userId);
    }
}
