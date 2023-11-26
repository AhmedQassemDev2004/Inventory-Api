import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateCategoryDto {
    @ApiProperty({
        name: "Category [edited]"
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string;
}