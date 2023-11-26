import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";
import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class AddUserDto {
    @ApiProperty({
        example: "User 1"
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        example: "user1@gmail.com"
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        example: "12345"
    })
    @IsNotEmpty()
    password: string;

    @ApiProperty({
        example: "ADMIN"
    })
    @IsEnum(Role)
    role: Role;
}