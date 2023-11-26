import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateProductDto {
    @ApiProperty({
        example: "Product 1",
        required: true
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        example: 99,
        required: true
    })
    @IsNumber()
    @IsPositive()
    price: number;

    @ApiProperty({
        example: 12,
        required: true
    })
    @IsNumber()
    @IsPositive()
    categoryId: number;

    @IsString()
    @IsOptional()
    image?: string;
}   