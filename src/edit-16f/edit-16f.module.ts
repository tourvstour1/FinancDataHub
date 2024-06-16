import { Module } from '@nestjs/common';
import { Edit16fService } from './edit-16f.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { CheckErrorService } from 'src/check-error/check-error.service';
import { CatalogsService } from 'src/catalogs/catalogs.service';
import { PrismaHospital } from 'src/prisma/prisma.service.hospital';

@Module({
  providers: [
    Edit16fService,
    PrismaFinance,
    CheckErrorService,
    CatalogsService,
    PrismaHospital,
  ],
  exports: [Edit16fService],
})
export class Edit16fModule { }
