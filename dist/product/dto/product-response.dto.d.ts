import { CategoryResponse } from "src/category/dto/category-response.dto";
export declare class ProductResponse {
    id: number;
    name: string;
    price: number;
    category: CategoryResponse;
    createdAt: string;
}
