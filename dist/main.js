"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const session = require("express-session");
const passport = require("passport");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(session({
        secret: "session-secret",
        resave: false,
        cookie: { maxAge: 3600000 }
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    await app.listen(8000);
}
bootstrap();
//# sourceMappingURL=main.js.map