import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { SaleModule } from './sale/sale.module';
import { AppController } from './app.controller';

@Module({
  imports: [UserModule, PrismaModule, ProductModule, CategoryModule, SaleModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
