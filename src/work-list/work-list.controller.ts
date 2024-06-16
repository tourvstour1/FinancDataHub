import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { WorkListService } from './work-list.service';
import { Response } from 'express';
import { ApiBearerAuth,  ApiTags } from '@nestjs/swagger';
import { IpdReques, OpdReques } from './work-list.body';
import { Edit16fService } from 'src/edit-16f/edit-16f.service';
import { CheckErrorService } from 'src/check-error/check-error.service';
import { AuthGuard } from 'src/auth/auth.guard';

// @UseGuards(AuthGuard)
// @ApiBearerAuth()
@ApiTags('work')
@Controller('work')
export class WorkListController {
  constructor(readonly work: WorkListService, readonly get16f: Edit16fService, readonly get16fError: CheckErrorService) {

  }
 
  @Post('opd-list')
  async postOpdList(@Body() opdReques: OpdReques, @Res() res: Response) {
    const { startDate, endDate, pageIndex, pageSize } = opdReques;
  
    const getOpdList = await this.work.opdListSerive(startDate, endDate, pageSize, pageIndex);
    const listSeq = getOpdList.data.map((i) => i.seq).reduce((pre, cur) => pre.includes(cur) ? pre : pre.concat(cur), []);
    const res16f = await this.get16f.getWithSeq(listSeq);
    const resultError = await this.get16fError.checkMasterItem(res16f);
    const result = this.work.mapOpdError(getOpdList, resultError)

    res.status(200).json(result);
  }

  @Post('ipd-list')
  async postIpdList(@Body() ipdReques: IpdReques, @Res() res: Response) {
    const { startDate, endDate, pageSize, pageIndex } = ipdReques;
    const getIpdList = await this.work.ipdListSerive(startDate, endDate, pageSize, pageIndex);
    const listAn = getIpdList.data.map((i) => i.an).reduce((pre, cur) => pre.includes(cur) ? pre : pre.concat(cur), []);
    const res16f = await this.get16f.getWithAn(listAn);
    const resultError = await this.get16fError.checkMasterItem(res16f);
    const result = this.work.mapIpdError(getIpdList, resultError)

    res.status(200).json(result);
  }

  @Post('opd-list-transfer')
  async postOpdListTransfer(@Body() opdReques: OpdReques, @Res() res: Response) {
    const { startDate, endDate, pageSize, pageIndex } = opdReques;
    const getOpdList = await this.work.opdListSerive(startDate, endDate, pageSize, pageIndex);
    const responst = await this.work.opdReadySend(getOpdList.data)

    res.status(200).json(responst);
  }

  @Post('ipd-list-transfer')
  async postIpdListTransfer(@Body() ipdReques: IpdReques, @Res() res: Response) {
    const { startDate, endDate, pageSize, pageIndex } = ipdReques;
    const getIpdList = await this.work.ipdListTransfer(startDate, endDate, pageSize, pageIndex);   
    const responst = await this.work.ipdReadySend(getIpdList.data)
    res.status(200).json(responst);
  }
}
