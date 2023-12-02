import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from "express-session";
import * as passport from 'passport';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaClient } from '@prisma/client';
import * as connectPgSimple from "connect-pg-simple";
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "http://localhost:3000",
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  const PgSessionStore = connectPgSimple(session);

  app.use(session({
    store: new PgSessionStore({
      conObject: {
        connectionString: process.env.DATABASE_URL + "?ssl=true"
      },
      tableName: "session"
    }),
    secret: "myscecret",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  }))

  app.use(passport.initialize())
  app.use(passport.session())


  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Inventory')
    .setDescription('Inventory api documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  await app.listen(process.env.PORT || 8000);
}
bootstrap();
