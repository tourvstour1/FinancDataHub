import { Module } from '@nestjs/common';
import { CheckErrorService } from './check-error.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { CatalogsService } from 'src/catalogs/catalogs.service';
import { PrismaHospital } from 'src/prisma/prisma.service.hospital';

@Module({
  providers: [
    CheckErrorService,
    PrismaFinance,
    CatalogsService,
    PrismaHospital,
  ],
  exports: [CheckErrorService],
})
export class CheckErrorModule {}
