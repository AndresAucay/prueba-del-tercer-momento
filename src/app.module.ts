import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CostumesModule } from './costumes/costumes.module';
import { AttendeesModule } from './attendees/attendees.module';
import { PartiesModule } from './parties/parties.module';
import { CostumesService } from './costumes/costumes.service';

@Module({
  imports: [PrismaModule, CostumesModule, AttendeesModule, PartiesModule],
  controllers: [AppController],
  providers: [AppService, CostumesService],
})
export class AppModule {}
