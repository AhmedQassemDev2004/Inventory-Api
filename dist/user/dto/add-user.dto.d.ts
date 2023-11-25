import { Role } from "@prisma/client";
export declare class AddUserDto {
    name: string;
    email: string;
    password: string;
    role: Role;
}
