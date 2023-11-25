import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateSaleDto {
    @IsNumber()
    @IsPositive()
    quantity: number;

    @IsNumber()
    @IsPositive()
    totalPrice: number;

    @IsNumber()
    @IsPositive()
    productId: number;

}