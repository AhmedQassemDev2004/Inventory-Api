import { ApiProperty } from "@nestjs/swagger";
import { CategoryResponse } from "src/category/dto/category-response.dto";

export class ProductResponse {
    @ApiProperty({
        example: 12
    })
    id: number;

    @ApiProperty({
        example: "Product"
    })
    name: string;

    @ApiProperty({
        example: 99
    })
    price: number;

    @ApiProperty({
        example: {
            id: 1,
            name: "Cars"
        }
    })
    category: CategoryResponse;

    @ApiProperty({
        example: "2023-11-26T20:47:12.893Z"
    })
    createdAt: string;
}