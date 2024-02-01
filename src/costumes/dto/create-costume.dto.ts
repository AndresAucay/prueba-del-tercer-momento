    import { IsBoolean, IsInt, IsNotEmpty, Min } from 'class-validator';

    export class CreateCostumeDto {
    @IsNotEmpty()
    name: string;

    description?: string;

    weakness: string[];

    skills: string[];

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    price: number;

    @IsBoolean()
    stock: boolean;

    // Otras propiedades según tus necesidades

    // Propiedades adicionales para el suministro de disfraces
    @IsNotEmpty()
    @IsBoolean()
    supply: boolean;

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    quantity: number;
    }


