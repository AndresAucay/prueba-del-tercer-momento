    import { IsInt, IsNotEmpty, Min } from 'class-validator';

    export class CreateCostumeDto {
    @IsNotEmpty()
    @IsInt()
    @Min(1)
    name:string;
    price: number;
    quantity: number;
    stock: boolean;
    }
