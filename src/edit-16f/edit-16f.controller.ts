import { Body, Controller, Post, Res } from '@nestjs/common';
import { An16f, Seq16f } from './edit-16.body';
import { ApiTags } from '@nestjs/swagger';
import { Edit16fService } from './edit-16f.service';
import { Response } from 'express';

@ApiTags('edit16f')
@Controller('edit-16f')
export class Edit16fController {
  constructor(readonly edit: Edit16fService) {}
  @Post('opd')
  async opdPersonService(@Body() body: Seq16f, @Res() res: Response) {
    res.status(200).json(await this.edit.getWithSeq(body.seq));
  }

  @Post('ipd')
  async ipdPersonService(@Body() body: An16f, @Res() res: Response) {
    res.status(200).json(await this.edit.getWithAn(body.an));
  }
}
