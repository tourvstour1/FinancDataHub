import { Module } from '@nestjs/common';
import { CatalogsController } from './catalogs.controller';
import { CatalogsService } from './catalogs.service';
import { PrismaHospital } from 'src/prisma/prisma.service.hospital';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { AuthGuard } from 'src/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [CatalogsController],
  providers: [CatalogsService, PrismaHospital, PrismaFinance, AuthGuard, JwtService],
  exports: [CatalogsService],
})
export class CatalogsModule { }
