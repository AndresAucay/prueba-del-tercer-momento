import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttendeesService } from './attendees.service';
import { CreateAttendeeDto } from './dto/create-attendee.dto';
import { UpdateAttendeeDto } from './dto/update-attendee.dto';

@Controller('attendees')
export class AttendeesController {
  constructor(private readonly attendeesService: AttendeesService) {}

  
  @Get('total')
  async getAllAttendees() {
    return this.attendeesService.getTotalAsistentes();
  }
  

}
