import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Query } from '@nestjs/common';
import { PartiesService } from './parties.service';
import { CreatePartyDto } from './dto/create-party.dto';
import { UpdatePartyDto } from './dto/update-party.dto';

@Controller('parties')
export class PartiesController {
  constructor(private readonly partiesService: PartiesService) {}
  /*@Get(':date')
  getPartiesByDate(@Param('date') date: string) {
    return this.partiesService.getPartiesByDate(new Date(date));
  }
  */
  }

