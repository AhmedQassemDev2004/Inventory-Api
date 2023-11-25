import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from "express-session"
import * as passport from 'passport';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    session({
      secret: "session-secret",
      resave: false,
      cookie: { maxAge: 3600000 }
    })
  )

  app.use(passport.initialize())
  app.use(passport.session())

  await app.listen(8000);
}
bootstrap();
