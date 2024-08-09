import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { ScheduleService } from './schedule/schedule.service';


@Controller('app')
export class AppController {
  constructor(
    readonly test: ScheduleService
  ) { }

  @Get('index')
  sentW(@Res() res: Response) {
    res.sendFile(
      join(__dirname, '../www/index.html'),
    );
  }

  @Get('test')
  async getTest(@Res() res: Response) {
    console.log('test');

    this.test.updateOpdFdhStatus()

    this.test.updateIpdFdhStatus()

    res.json('update...')
  }
}
