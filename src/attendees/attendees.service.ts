import { Injectable } from '@nestjs/common';
import { CreateAttendeeDto } from './dto/create-attendee.dto';
import { UpdateAttendeeDto } from './dto/update-attendee.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AttendeesService {
  constructor(private prisma: PrismaService) {}
 
  async getTotalAsistentes() {
    return this.prisma.attendee.findMany();
  }
}