import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from "express-session";
import * as connectPgSimple from 'connect-pg-simple';
import * as passport from 'passport';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "http://localhost:3000",
    credentials: true
  });

  app.useGlobalPipes(new ValidationPipe());
  app.use(
    session({
      secret: "session-secret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly:true,
        maxAge: 3600000
      }
    })
  )

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
