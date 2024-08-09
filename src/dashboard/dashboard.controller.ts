import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { Response } from 'express'
import { DashboardService } from './dashboard.service';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('dashboard')
@Controller('dashboard')
export class DashboardController {
    constructor(readonly staticDashboard: DashboardService) { }
    @Get('static-opd')
    async getStaticOpd(@Res() res: Response) {
        const opd = await this.staticDashboard.getOpdStatic()
        res.status(200).json(opd)
    }

    @Get('static-ipd')
    async getStaticIpd(@Res() res: Response) {
        const ipd = await this.staticDashboard.getIpdStatic()
        res.status(200).json(ipd)
    }
}
