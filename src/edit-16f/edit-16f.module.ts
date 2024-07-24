import { Module } from '@nestjs/common';
import { Edit16fService } from './edit-16f.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { CheckErrorService } from 'src/check-error/check-error.service';
import { CatalogsService } from 'src/catalogs/catalogs.service';
import { PrismaHospital } from 'src/prisma/prisma.service.hospital';
import { ChtModifyService } from 'src/cht-modify/cht-modify.service';
import { ReProcressService } from 'src/re-procress/re-procress.service';

@Module({
  imports:[ReProcressService],
  providers: [
    Edit16fService,
    PrismaFinance,
    CheckErrorService,
    CatalogsService,
    PrismaHospital,
    ChtModifyService,
  ],
})
export class Edit16fModule { }
