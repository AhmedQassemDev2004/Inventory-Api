import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UserResponseDto {
    @ApiProperty({
        example: "Test name"
    })
    name: string;

    @ApiProperty({
        example: "test@gmail.com"
    })
    email: string;

    @ApiProperty({
        example: "USER"
    })
    role: string;

    @ApiProperty({
        example: "2023-11-26T20:47:12.893Z"
    })
    lastLogin: string;
}