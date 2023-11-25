import { Body, Controller, Get, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RegisterDto } from '../dto/register.dto';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post("/login")
    async login(@Request() req) {
        return req.user;
    }


    @Public()
    @Post("/register")
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
    async logout(@Request() req) {
        await req.logout((err) => {
            if (err) throw err;
        });

        return {
            message: "Logged out succesfully"
        }
    }
}
