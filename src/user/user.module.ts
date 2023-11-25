import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './auth/strategy/local.strategy';
import { SessionSerializer } from './auth/serialiszers/session.serializer';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticatedGuard } from './auth/guards/auth.guard';
import { RolesGuard } from './auth/guards/role.guard';

@Module({
  imports: [PrismaModule, PassportModule.register({ session: true })],
  providers: [
    UserService,
    AuthService,
    LocalStrategy,
    SessionSerializer,
    {
      provide: APP_GUARD,
      useClass: AuthenticatedGuard
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ],
  controllers: [UserController, AuthController]
})
export class UserModule { }
