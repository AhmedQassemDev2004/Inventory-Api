import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UpdateUserDto } from './dto/update.dto';
import { UserService } from './user.service';
import { AuthUser } from './auth/decorators/user.decorator';
import { ChangePasswordDto } from './dto/change-password.dto';
import { Roles } from './auth/decorators/role.decorator';
import { Role } from '@prisma/client';
import { AddUserDto } from './dto/add-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Put("/update")
    update(@AuthUser("id") userId, @Body() body: UpdateUserDto) {
        return this.userService.update(userId, body);
    }

    @Roles(Role.ADMIN)
    @Put("/update/:userId")
    updateUser(@Param("userId") userId, @Body() body: UpdateUserDto) {
        return this.userService.update(userId, body);
    }

    @Put("/change-password")
    changePassword(@AuthUser("id") userId, @Body() body: ChangePasswordDto) {
        return this.userService.changePassword(userId, body);
    }

    @Get("/profile")
    profile(@AuthUser() user) {
        return user;
    }

    @Roles(Role.ADMIN)
    @Get("/list")
    usersList() {
        return this.userService.usersList();
    }

    @Roles(Role.ADMIN)
    @Post("/add")
    addUser(@Body() body: AddUserDto) {
        return this.userService.addUser(body);
    }

    @Roles(Role.ADMIN)
    @Delete("/delete/:userId")
    deleteUser(@Param("userId", ParseIntPipe) userId: number) {
        return this.userService.deleteUser(userId);
    }
}
