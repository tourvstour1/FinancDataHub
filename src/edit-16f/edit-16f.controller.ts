import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { An16f, Seq16f, OpdUpdate, IpdUpdate } from './edit-16.body';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Edit16fService } from './edit-16f.service';
import { Response } from 'express';
import { CheckErrorService } from 'src/check-error/check-error.service';
import { ChtModifyService } from 'src/cht-modify/cht-modify.service';
import { AuthGuard } from 'src/auth/auth.guard';


@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('edit16f')
@Controller('edit-16f')
export class Edit16fController {
  constructor(
    readonly getServie: Edit16fService,
    readonly update: Edit16fService,
    readonly getError: CheckErrorService,
    readonly modifyCht: ChtModifyService
  ) { }

  @Post('get-pat-opd')
  async opdPersonService(@Body() body: Seq16f, @Res() res: Response) {
    const seq = body.seq
    await this.modifyCht.opdModifyCht([seq])
    const data = await this.getServie.getWithSeq([seq]);
    const error = await this.getError.checkMasterItem(data);
    res.status(200).json({ data, error });
  }

  @Post('get-pat-ipd')
  async ipdPersonService(@Body() body: An16f, @Res() res: Response) {
    const an = body.an
    await this.modifyCht.ipdModifyCht([an])
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
