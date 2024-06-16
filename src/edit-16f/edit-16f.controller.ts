import { Body, Controller, Post, Res } from '@nestjs/common';
import { An16f, Seq16f, OpdUpdate, IpdUpdate } from './edit-16.body';
import { ApiTags } from '@nestjs/swagger';
import { Edit16fService } from './edit-16f.service';
import { Response } from 'express';
import { CheckErrorService } from 'src/check-error/check-error.service';

@ApiTags('edit16f')
@Controller('edit-16f')
export class Edit16fController {
  constructor(
    readonly getServie: Edit16fService,
    readonly update: Edit16fService,
    readonly getError: CheckErrorService,
  ) { }
  
  @Post('get-pat-opd')
  async opdPersonService(@Body() body: Seq16f, @Res() res: Response) {
    const seq = body.seq
    const data = await this.getServie.getWithSeq([seq]);
    const error = await this.getError.checkMasterItem(data);
    res.status(200).json({ data, error });
  }

  @Post('get-pat-ipd')
  async ipdPersonService(@Body() body: An16f, @Res() res: Response) {
    const an = body.an
    const data = await this.getServie.getWithAn([an]);
    const error = await this.getError.checkMasterItem(data);;
    res.status(200).json({ data, error });
  }

  @Post('update-pat-opd')
  async opdUpdate(@Body() body: OpdUpdate, @Res() res: Response) {
    try {
      const result = await this.update.updateOpdService(body as any);
      res.status(200).json(result);
    } catch (err) {
      res.status(501).json('error');
      throw (err)
    }
  }

  @Post('update-pat-ipd')
  async ipdUpdate(@Body() body: IpdUpdate, @Res() res: Response) {
    try {
      const result = await this.update.updateIpdservice(body as any);
      
      res.status(200).json(result);
    } catch (err) {
      res.status(501).json('error');
      throw (err)
    }
  }
}
