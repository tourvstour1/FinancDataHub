import { Controller, Get, Res } from '@nestjs/common';

import { Response } from 'express';
import { join } from 'path';

@Controller('app')
export class AppController {
  constructor() {}

  @Get('index')
  sentW(@Res() res: Response) {
    res.sendFile(
      join(__dirname, '../www/index.html'),
    );
  }
}
