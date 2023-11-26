import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UpdateProductDto {
    @ApiProperty({
        example: "Product 1",
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string;

    @ApiProperty({
        example: 99,
    })
    @IsNumber()
    @IsPositive()
    @IsOptional()
    price: number;

    @ApiProperty({
        example: 12,
    })
    @IsNumber()
    @IsPositive()
    @IsOptional()
    categoryId: number;

    @IsString()
    @IsOptional()
    image?: string;
}