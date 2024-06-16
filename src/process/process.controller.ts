import { Controller, Get, Query } from '@nestjs/common';
import { ProcessService } from './process.service';
import { ApiTags } from '@nestjs/swagger';

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
