import { ApiProperty } from "@nestjs/swagger";

export class CategoryResponse {
    @ApiProperty({
        example: 1
    })
    id: number;

    @ApiProperty({
        example: "Category"
    })
    name: string;
}