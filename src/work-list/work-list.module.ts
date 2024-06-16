import { Module } from '@nestjs/common';
import { WorkListService } from './work-list.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { WorkListController } from './work-list.controller';
import { InsModule } from 'src/f16/ins/ins.module';
import { ChtModule } from 'src/f16/cht/cht.module';
import { Edit16fService } from 'src/edit-16f/edit-16f.service';
import { CheckErrorService } from 'src/check-error/check-error.service';
import { CatalogsService } from 'src/catalogs/catalogs.service';
import { PrismaHospital } from 'src/prisma/prisma.service.hospital';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [InsModule, ChtModule],
  controllers: [WorkListController],
  providers: [
    WorkListService,
    PrismaFinance,
    PrismaHospital,
    Edit16fService,
    CheckErrorService,
    CatalogsService,
    JwtService
  ],
  exports: [WorkListService,],
})
export class WorkListModule {}
