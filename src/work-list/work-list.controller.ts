import { Body, Controller, Post, Res } from '@nestjs/common';
import { WorkListService } from './work-list.service';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { IpdReques, OpdReques } from './work-list.body';

@ApiTags('work')
@Controller('work')
export class WorkListController {
  constructor(readonly work: WorkListService) {}
  @Post('opd-list')
  async postOpdList(@Body() opdReques: OpdReques, @Res() res: Response) {
    const { startDate, endDate } = opdReques;
    const result = await this.work.opdListSerive(startDate, endDate);
    res.status(200).json(result);
  }

  @Post('ipd-list')
  async postIpdList(@Body() ipdReques: IpdReques, @Res() res: Response) {
    const { startDate, endDate } = ipdReques;
    const result = await this.work.ipdListSerive(startDate, endDate);
    res.status(200).json(result);
  }
}
