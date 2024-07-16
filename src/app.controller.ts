import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { ChtModifyService } from './cht-modify/cht-modify.service';


@Controller('app')
export class AppController {
  constructor(
    readonly test: ChtModifyService
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

    res.json(await this.test.opdModifyCht(['067081338']))
    // res.json(await this.test.ipdModifyCht(['167001699']))
  }
}
