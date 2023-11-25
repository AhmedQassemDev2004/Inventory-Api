import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UpdateSaleDto {
    @IsNumber()
    @IsPositive()
    @IsOptional()
    quantity: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    totalPrice: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    productId: number;
}