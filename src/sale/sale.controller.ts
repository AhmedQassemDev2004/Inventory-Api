import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Role } from '@prisma/client';
import { Roles } from 'src/user/auth/decorators/role.decorator';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { AuthUser } from 'src/user/auth/decorators/user.decorator';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Controller('sale')
export class SaleController {
    constructor(private saleService: SaleService) { }

    @Get("/sale/list")
    list() {
        return this.saleService.list();
    }

    @Get("/sale/list/daily")
    listDaily() {
        return this.saleService.listDaily();
    }

    @Get("/sale/list/monthly")
    listMonthly() {
        return this.saleService.listMonthly();
    }

    @Roles(Role.ADMIN)
    @Post("/create")
    create(@AuthUser("id") userId, @Body() body: CreateSaleDto) {
        return this.saleService.create(userId, body);
    }

    @Roles(Role.ADMIN, Role.SPECIAL)
    @Put("/update/:id")
    update(@Param("id", ParseIntPipe) id: number, body: UpdateSaleDto) {
        return this.saleService.update(id, body);
    }

    @Roles(Role.ADMIN, Role.SPECIAL)
    @Delete("/delete/:id")
    delete(@Param("id", ParseIntPipe) id: number) {
        return this.saleService.delete(id);
    }

}
