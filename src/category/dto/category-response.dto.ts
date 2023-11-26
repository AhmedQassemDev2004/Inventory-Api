import { ApiProperty } from "@nestjs/swagger";

export class CategoryResponse {
    @ApiProperty({
        example: 12
    })
    id: number;

    @ApiProperty({
        example: "Cars"
    })
    name: string;
}