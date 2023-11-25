import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user.service';
import { User } from '@prisma/client';
import { RegisterDto } from '../dto/register.dto';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private userService: UserService) { }

    async validateUser(email: string, password: string): Promise<Partial<User> | null> {
        const user = await this.userService.findOne(email);
        if (user && (await bcrypt.compare(password, user.password))) {
            // update last login
            await this.userService.updateLastLogin(user.id);

            const { password, ...res } = user;
            return res;
        }
        return null;
    }

    async registerUser(body: RegisterDto) {
        const user = await this.userService.findOne(body.email);
        if (user)
            throw new ConflictException();

        return await this.userService.create(body);
    }
}
