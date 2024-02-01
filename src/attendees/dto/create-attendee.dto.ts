    import { IsNotEmpty, IsString, IsNumber, IsArray, IsBoolean, IsOptional } from 'class-validator';


    export class CreateAttendeeDto {
    @IsNotEmpty()
    @IsString()
    dni: string;

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsOptional()
    @IsString()
    address?: string;

    @IsNotEmpty()
    @IsNumber()
    money: number;

    @IsNotEmpty()
    @IsNumber()
    age: number;

    @IsArray()
    fears: string[];

    @IsOptional()
    @IsBoolean()
    isNervous?: boolean;
    }


