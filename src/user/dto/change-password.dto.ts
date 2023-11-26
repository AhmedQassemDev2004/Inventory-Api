import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class ChangePasswordDto {
    @ApiProperty({
        example: "12345"
    })
    @IsString()
    @IsNotEmpty()
    oldPassword: string;

    @ApiProperty({
        example: "123456"
    })
    @IsString()
    @IsNotEmpty()
    newPassword: string;
}