import { Injectable } from '@nestjs/common';
import { CreatePartyDto } from './dto/create-party.dto';
import { UpdatePartyDto } from './dto/update-party.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PartiesService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(date: Date) {
    return this.prisma.party.findUnique({
      where: {
        date: date,
      },
    });
  }
}
