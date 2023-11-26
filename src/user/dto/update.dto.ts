import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
    @ApiProperty({
        example: "User 2"
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string;

    @ApiProperty({
        example: "user2@gmail.com"
    })
    @IsEmail()
    @IsOptional()
    email: string;
}