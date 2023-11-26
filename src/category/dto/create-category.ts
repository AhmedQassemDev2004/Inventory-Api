import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty({
        name: "Category 2"
    })
    @IsString()
    @IsNotEmpty()
    name: string;
}