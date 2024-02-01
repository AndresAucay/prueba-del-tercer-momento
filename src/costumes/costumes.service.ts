import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCostumeDto} from './dto/create-costume.dto';
import { UpdateCostumeDto } from './dto/update-costume.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CostumesService {
  constructor(private prisma: PrismaService) {}
//paso 1 listar todos los trajes
  async getCostumesInStock() {
    return this.prisma.costume.findMany({
      where: { stock: true }, 
    });
  }

//paso 2 agregar mas al inventario para satisfacer ls nececidades

async supplyCostumes(createCostumeDto:CreateCostumeDto) {
  const { quantity } = createCostumeDto;

  
const costumesInStock = await this.prisma.costume.count({ where: { stock: true } });
  if (costumesInStock === quantity) {
    
    return ('no hay problema')
  } else {
  return ('fueron agregados los trajes');
  }
}
}
