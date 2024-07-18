import { Module } from '@nestjs/common';
import { ProcessController } from './process.controller';
import { ProcessService } from './process.service';
import { QueryModule } from 'src/query/query.module';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { PrismaHospital } from 'src/prisma/prisma.service.hospital';

import { InsModule } from 'src/f16/ins/ins.module';
import { PatModule } from 'src/f16/pat/pat.module';
import { OpdModule } from 'src/f16/opd/opd.module';
import { OdxModule } from 'src/f16/odx/odx.module';
import { OrfModule } from 'src/f16/orf/orf.module';
import { OopModule } from 'src/f16/oop/oop.module';
import { IpdModule } from 'src/f16/ipd/ipd.module';
import { IrfModule } from 'src/f16/irf/irf.module';
import { IdxModule } from 'src/f16/idx/idx.module';
import { IopModule } from 'src/f16/iop/iop.module';
import { ChtModule } from 'src/f16/cht/cht.module';
import { ChaModule } from 'src/f16/cha/cha.module';
import { AerModule } from 'src/f16/aer/aer.module';
import { AdpModule } from 'src/f16/adp/adp.module';
import { LvdModule } from 'src/f16/lvd/lvd.module';
import { DruModule } from 'src/f16/dru/dru.module';
import { LabfuModule } from 'src/f16/labfu/labfu.module';
import { EventModule } from 'src/event/event.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    QueryModule,
    InsModule,
    PatModule,
    OpdModule,
    OdxModule,
    OrfModule,
    OopModule,
    IpdModule,
    IrfModule,
    IdxModule,
    IopModule,
    ChtModule,
    ChaModule,
    AerModule,
    AdpModule,
    LvdModule,
    DruModule,
    LabfuModule,
    EventModule,
  ],
  controllers: [ProcessController],
  providers: [ProcessService, PrismaFinance, PrismaHospital, JwtService],
})
export class ProcessModule { }
