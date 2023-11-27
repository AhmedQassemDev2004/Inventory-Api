import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty({
        example: "Category 2"
    })
    @IsString()
    @IsNotEmpty()
    name: string;
}