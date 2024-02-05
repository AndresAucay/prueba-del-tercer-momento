import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CostumesService } from './costumes.service';
import { CreateCostumeDto} from './dto/create-costume.dto';
import { UpdateCostumeDto } from './dto/update-costume.dto';

@Controller('costumes')
export class CostumesController {
  constructor(private readonly costumesService: CostumesService) {}

  @Get('stock')
  async getCostumesInStock1() {
    return this.costumesService.getCostumesInStock();
  }
//paso 2 
  @Get('stock-asistentes')
  async getCostumesInStock() {
    return this.costumesService.getCostumesInStock();
  }


  @Post('supplying')
  async supplyCostumes(@Body() createCostumeDto: CreateCostumeDto) {
    return this.costumesService.supplyCostumes(createCostumeDto);
  }



@Patch('update/:id')
async updateCostume(@Param('id') id: number, @Body() updateCostumeDto: UpdateCostumeDto) {
  return this.costumesService.updateCostume(id, updateCostumeDto);
}

}

