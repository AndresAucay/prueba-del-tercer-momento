import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCostumeDto} from './dto/create-costume.dto';
import { UpdateCostumeDto } from './dto/update-costume.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CostumesService {
  constructor(private prisma: PrismaService) {}
//paso 1 listar todos los trajes
  async getCostumesInStock1() {
    return this.prisma.costume.findMany({
      where: { stock: true }, 
    });
  }

//paso 2 agregar mas al inventario para satisfacer ls nececidades

async getCostumesInStock() {
  return this.prisma.costume.findMany({
    where: { stock: true },
  });
}

async supplyCostumes(createCostumeDto: CreateCostumeDto) {
  const { quantity } = createCostumeDto;

  const costumesInStock = await this.prisma.costume.count({ where: { stock: true } });

  console.log('Cantidad de disfraces en stock:', costumesInStock);
  console.log('Cantidad especificada en el suministro:', quantity);

  if (costumesInStock === quantity) {
    throw new BadRequestException('Inventario suficiente, no se requiere suministro.');
  } else {
    console.log('Suministro de disfraces completado exitosamente.');
    return 'Suministro de disfraces completado exitosamente.';
  }
}
async updateCostume(id: number, updateCostumeDto: UpdateCostumeDto) {
  return this.prisma.costume.update({
    where: { 
      id: Number(id),
    },
    data: { stock: updateCostumeDto.stock },
  });
}

}
