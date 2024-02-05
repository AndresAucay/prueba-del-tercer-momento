import { PartialType } from '@nestjs/swagger';
import { CreateCostumeDto } from './create-costume.dto';
import { IsBoolean } from 'class-validator';

export class UpdateCostumeDto extends PartialType(CreateCostumeDto) {
    @IsBoolean()
    id:number;
    stock: boolean;
    quantity: number;
}
