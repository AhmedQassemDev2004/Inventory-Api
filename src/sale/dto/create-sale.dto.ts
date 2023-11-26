import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateSaleDto {
    @ApiProperty({
        example: 2
    })
    @IsNumber()
    @IsPositive()
    quantity: number;

    @ApiProperty({
        example: 99.9
    })
    @IsNumber()
    @IsPositive()
    totalPrice: number;

    @ApiProperty({
        example: 12
    })
    @IsNumber()
    @IsPositive()
    productId: number;

}