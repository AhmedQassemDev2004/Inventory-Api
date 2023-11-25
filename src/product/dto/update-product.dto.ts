import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UpdateProductDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    categoryId: number;

    @IsString()
    @IsOptional()
    image?: string;
}