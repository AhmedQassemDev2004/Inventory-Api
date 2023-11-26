import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
    @Get("/")
    hi() {
        return "<h1>Inventory api</h1>"
    }
}
