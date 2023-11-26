import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UpdateSaleDto {
    @ApiProperty({
        example: 1
    })
    @IsNumber()
    @IsPositive()
    @IsOptional()
    quantity: number;

    @ApiProperty({
        example: 1
    })
    @IsNumber()
    @IsPositive()
    @IsOptional()
    totalPrice: number;

    @ApiProperty({
        example: 1
    })
    @IsNumber()
    @IsPositive()
    @IsOptional()
    productId: number;
}