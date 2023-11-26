import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";
import { IsEmail, IsEnum, IsNotEmpty, IsString, Min, MinLength } from "class-validator";

export class RegisterDto {
    @ApiProperty({
        example: "Test name",
        required: true
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        example: "test@gmai.com",
        required: true
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        example: "test password",
        required: true,
        minLength: 5,
    })
    @IsNotEmpty()
    @MinLength(5)
    password: string;
}