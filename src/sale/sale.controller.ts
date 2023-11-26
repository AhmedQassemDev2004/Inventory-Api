import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Role } from '@prisma/client';
import { Roles } from 'src/user/auth/decorators/role.decorator';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { AuthUser } from 'src/user/auth/decorators/user.decorator';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { ApiConflictResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SaleResponse } from './dto/sale-response.dto';

@ApiTags("Sale")
@Controller('sale')
export class SaleController {
    constructor(private saleService: SaleService) { }

    @ApiResponse({
        type: [SaleResponse]
    })
    @Get("/sale/list")
    list() {
        return this.saleService.list();
    }

    @ApiResponse({
        type: [SaleResponse]
    })
    @Get("/sale/list/daily")
    listDaily() {
        return this.saleService.listDaily();
    }

    @ApiResponse({
        type: [SaleResponse]
    })
    @Get("/sale/list/monthly")
    listMonthly() {
        return this.saleService.listMonthly();
    }

    @ApiResponse({
        type: SaleResponse
    })
    @Roles(Role.ADMIN)
    @Post("/create")
    create(@AuthUser("id") userId, @Body() body: CreateSaleDto) {
        return this.saleService.create(userId, body);
    }

    @ApiResponse({
        type: SaleResponse
    })
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
