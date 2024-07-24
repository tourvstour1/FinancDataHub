import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { OpdClaimNumber, IpdClaimNumber, OpdClaimService, IpdClaimService } from './history-list.entity';
import { Response } from 'express';
import { HistoryListService } from './history-list.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('history')
@Controller('history-list')
export class HistoryListController {
    constructor(readonly history: HistoryListService) { }
    @Post('opd-claim-numbers')
    async postOpdClaimHistory(@Body() opdClaimHistory: OpdClaimNumber, @Res() res: Response) {
        const { startDate, endDate } = opdClaimHistory;
        const getClaimNumbers = await this.history.getOpdClaimHistory(startDate, endDate)
        res.status(200).json(getClaimNumbers)
    }

    @Post('opd-claim-service')
    async postOpdClaimService(@Body() opdClaimService: OpdClaimService, @Res() res: Response) {
        const getOpdClaim = await this.history.historyOpdClaimServices(opdClaimService)
        res.status(200).json(getOpdClaim)
    }

    @Post('ipd-claim-numbers')
    async postIpdClaimHistory(@Body() ipdClaimHistory: IpdClaimNumber, @Res() res: Response) {
        const { startDate, endDate } = ipdClaimHistory;
        const getClaimNumbers = await this.history.getIpdClaimHistory(startDate, endDate)
        res.status(200).json(getClaimNumbers)
    }

    @Post('ipd-claim-service')
    async postIpdClaimService(@Body() ipdClaimService: IpdClaimService, @Res() res: Response) {       
        const getIpdClaim = await this.history.historyIpdClaimServices(ipdClaimService)
        res.status(200).json(getIpdClaim)
    }
}
