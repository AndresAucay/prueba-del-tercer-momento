import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CostumesService } from './costumes.service';
import { CreateCostumeDto} from './dto/create-costume.dto';
import { UpdateCostumeDto } from './dto/update-costume.dto';

@Controller('costumes')
export class CostumesController {
  constructor(private readonly costumesService: CostumesService) {}

  @Get('stock')
  async getCostumesInStock() {
    return this.costumesService.getCostumesInStock();
  }


  @Post('supplying')
  async supplyCostumes(@Body() createCostumeSupplyDto: CreateCostumeDto) {
    return this.costumesService.supplyCostumes(createCostumeSupplyDto);
  }

}