import { ApiProperty } from "@nestjs/swagger";
import { ProductResponse } from "src/product/dto/product-response.dto";
import { UserResponseDto } from "src/user/dto/user-response.dto";

export class SaleResponse {
    @ApiProperty({
        example: 1
    })
    id: number;

    @ApiProperty({
        example: 2
    })
    quantity: number;

    @ApiProperty({
        example: 99.9
    })
    totalPrice: number;

    @ApiProperty({
        example: {
            name: "Product 1",
            price: 49.9,
            category: {
                id: 1,
                category: "Category 1"
            }
        }
    })
    product: ProductResponse;

    @ApiProperty({
        example: {
            name: "Test",
            email: "test@gmail.com",
            role: "USER",
        }
    })
    user: UserResponseDto;

    @ApiProperty({
        example: "2023-11-26T20:47:12.893Z"
    })
    createdAt: string;
}