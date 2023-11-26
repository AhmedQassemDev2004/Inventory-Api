import { ProductResponse } from "src/product/dto/product-response.dto";
import { UserResponseDto } from "src/user/dto/user-response.dto";
export declare class SaleResponse {
    id: number;
    quantity: number;
    totalPrice: number;
    product: ProductResponse;
    user: UserResponseDto;
    createdAt: string;
}
