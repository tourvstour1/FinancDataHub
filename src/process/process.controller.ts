import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ProcessService } from './process.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('process')
@Controller('process')
export class ProcessController {
  constructor(readonly processService: ProcessService) {}

  @Get('new-processing')
  get16FReport(
    @Query('dateStart') dateStart: string,
    @Query('dateEnd') dateEnd: string,
  ) {
     
    const newDateStart =
      +dateStart.split('-')[0] +
      543 +
      '-' +
      dateStart.split('-')[1] +
      '-' +
      dateStart.split('-')[2];

    const newdateEnd =
      +dateEnd.split('-')[0] +
      543 +
      '-' +
      dateEnd.split('-')[1] +
      '-' +
      dateEnd.split('-')[2];


    this.processService.create16F(newDateStart, newdateEnd);
    return 'await process';
  }
}
