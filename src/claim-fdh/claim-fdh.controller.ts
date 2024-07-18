import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { OpdClaim, IpdClaim } from './claim-fdn.body';
import { ClaimFdhService } from './claim-fdh.service';
import { AuthGuard } from 'src/auth/auth.guard';


@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('claim-fdh')
@Controller('claim-fdh')
export class ClaimFdhController {
  constructor(readonly claimService: ClaimFdhService) {}
  @Post('opd')
  async opdClaim(@Body() seq: OpdClaim, @Res() res: Response) {
    const result = await this.claimService.findsOpd(seq.seq);
    if (result.opd.length > 0) {
      const statusClaim = await this.claimService.toTextOpd(result);
      res.status(200).json(statusClaim);
    } else {
      res.status(404).json({ message: 'ไม่พบข้อมูล SEQ', status: 404 });
    }
  }

  @Post('ipd')
  async ipdClaim(@Body() an: IpdClaim, @Res() res: Response) {
    const result = await this.claimService.findsIpd(an.an);
    if (result.ipd.length > 0) {
      const statusClaim = await this.claimService.toTextIpd(result);
      res.status(200).json(statusClaim);
    } else {
      res.status(404).json({ message: 'ไม่พบข้อมูล AN', status: 404 });
    }
  }
}
