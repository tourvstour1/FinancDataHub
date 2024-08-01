import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { CatalogsService } from './catalogs.service';
import { Response } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdpBody, DrugBody } from './catalogs.body';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@ApiBearerAuth()

@ApiTags('catalogs')
@Controller('catalogs')
export class CatalogsController {
  constructor(readonly cattalog: CatalogsService) { }

  @Get('item-master')
  async getItemsMaster(@Res() res: Response) {
    const reslut = await this.cattalog.itemMaster();
    res.status(200).json(reslut);
  }

  @Post('free-schedule-drug')
  async DrugFreeSchedule(@Body() drugKeyWord: DrugBody, @Res() res: Response) {

    const reslut = await this.cattalog.drugFreeSchedule(
      drugKeyWord.drugKeyWord as unknown as string,
    );
    res.status(200).json(reslut);
  }

  @Post('free-schedule-adp')
  async getLabCatalogs(@Body() adpKeyWord: AdpBody, @Res() res: Response) {
    const result = await this.cattalog.adpFreeSchedule(adpKeyWord);
    res.status(200).json(result);
  }
}
