import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReProcessIpd, ReProcessOpd } from './re-precess.body';
import { Response } from 'express';
import { ReProcressService } from './re-procress.service';
import { ApiResponst } from 'src/app.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('re-procress')
@Controller('re-procress')
export class ReProcressController {
    constructor(readonly ReProcessService: ReProcressService) { }

    @ApiResponse({ status: 200, type: ApiResponst })
    @ApiResponse({ status: 500, type: ApiResponst })
    @Post('opd-re-process')
    async postOpdReProcess(@Body() body: ReProcessOpd, @Res() res: Response) {
        try {
            const result = await this.ReProcessService.opdReProcess(body.seq) as unknown as ApiResponst
            res.status(result.status).json(result)
        } catch (err) {
            const errResponst: ApiResponst = {
                description: 'พบข้อผิดพลาด',
                status: 500
            }
            res.status(errResponst.status).json(errResponst)
        }
    }

    @ApiResponse({ status: 200, type: ApiResponst })
    @ApiResponse({ status: 500, type: ApiResponst })
    @Post('ipd-re-process')
    async postIpdReProcess(@Body() body: ReProcessIpd, @Res() res: Response) {
        try {
            const result = await this.ReProcessService.ipdReProcess(body.an) as unknown as ApiResponst
            res.status(result.status).json(result)
        } catch (err) {
            const errResponst: ApiResponst = {
                description: 'พบข้อผิดพลาด',
                status: 500

            }
            res.status(errResponst.status).json(errResponst)
        }
    }
}
