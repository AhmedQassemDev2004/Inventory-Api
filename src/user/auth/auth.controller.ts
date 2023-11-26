import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RegisterDto } from '../dto/register.dto';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { ApiBody, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { User } from "@prisma/client";
import { UserResponseDto } from '../dto/user-response.dto';
class LoginExample {
    email: string;
    password: string;
}

@ApiTags("Authentication")
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @UseGuards(LocalAuthGuard)
    @HttpCode(200)
    @Post("/login")
    @ApiBody({
        schema: { $ref: getSchemaPath(LoginExample) },
        required: true,
        examples: {
            'application/json': {
                value: { email: 'user@example.com', password: 'password123' },
            },
        },
    })
    @ApiResponse({
        status: 200,
        description: 'User authenticated successfully',
        type: UserResponseDto,
    })
    async login(@Request() req) {
        return req.user;
    }


    @Public()
    @HttpCode(201)
    @Post("/register")
    @ApiResponse({
        status: 200,
        description: 'User authenticated successfully',
        type: UserResponseDto,
    })
    async register(@Body() body: RegisterDto, @Request() req) {
        const user = await this.authService.registerUser(body);
        await req.logIn(user, (err) => {
            if (err) {
                throw err;
            }
        });

        return user;
    }

    @Post("/logout")
    @HttpCode(200)
    async logout(@Request() req) {
        await req.logout((err) => {
            if (err) throw err;
        });

        return {
            message: "Logged out succesfully"
        }
    }
}
