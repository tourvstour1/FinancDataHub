import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join, resolve} from 'path';
import { UpdateTransService } from './update-trans/update-trans.service';
import { readdir, readFileSync } from 'fs';


@Controller('app')
export class AppController {
  constructor(
    readonly test: UpdateTransService
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

    const filePath = resolve(__dirname, `../out/ipd/`,'ipd01072567191028');
    console.log(filePath);
 
    
    res.json(555)
    // res.json(await this.test.ipdModifyCht(['167001699']))
  }
}
