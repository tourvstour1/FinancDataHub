import { Module } from '@nestjs/common';
import { CatalogsController } from './catalogs.controller';
import { CatalogsService } from './catalogs.service';
import { PrismaHospital } from 'src/prisma/prisma.service.hospital';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Module({
  controllers: [CatalogsController],
  providers: [CatalogsService, PrismaHospital, PrismaFinance],
  exports: [CatalogsService],
})
export class CatalogsModule {}
