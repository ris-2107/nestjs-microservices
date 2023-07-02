import { IsNotEmpty, IsEmail, IsString, MaxLength } from "class-validator";
export class CreateUserDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly userId: string;
    
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly gender: string;
}