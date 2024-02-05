import { Injectable } from '@nestjs/common';
import { CreatePartyDto } from './dto/create-party.dto';
import { UpdatePartyDto } from './dto/update-party.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PartiesService {
  constructor(private readonly prisma: PrismaService) {}
  /*async getPartiesByDate(date: Date) {
    // Utiliza el servicio Prisma para interactuar con la base de datos
    return this.prisma.party.findMany({
      where: {
        date: {
          gte: date,
  
        }
      }
    })
  }*/
}
