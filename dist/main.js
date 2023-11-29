"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const session = require("express-session");
const passport = require("passport");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const connectPgSimple = require("connect-pg-simple");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: "http://localhost:3000",
        credentials: true
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
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
            secure: true,
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24,
        },
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Inventory')
        .setDescription('Inventory api documentation')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('documentation', app, document);
    await app.listen(process.env.PORT || 8000);
}
bootstrap();
//# sourceMappingURL=main.js.map