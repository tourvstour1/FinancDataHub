import { Module } from '@nestjs/common';
import { ReProcressService } from './re-procress.service';
import { PrismaHospital } from 'src/prisma/prisma.service.hospital';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { AdpModule } from 'src/f16/adp/adp.module';
import { AerModule } from 'src/f16/aer/aer.module';
import { ChaModule } from 'src/f16/cha/cha.module';
import { ChtModule } from 'src/f16/cht/cht.module';
import { DruModule } from 'src/f16/dru/dru.module';
import { IdxModule } from 'src/f16/idx/idx.module';
import { InsModule } from 'src/f16/ins/ins.module';
import { IopModule } from 'src/f16/iop/iop.module';
import { IpdModule } from 'src/f16/ipd/ipd.module';
import { IrfModule } from 'src/f16/irf/irf.module';
import { LabfuModule } from 'src/f16/labfu/labfu.module';
import { LvdModule } from 'src/f16/lvd/lvd.module';
import { OdxModule } from 'src/f16/odx/odx.module';
import { OopModule } from 'src/f16/oop/oop.module';
import { OpdModule } from 'src/f16/opd/opd.module';
import { OrfModule } from 'src/f16/orf/orf.module';
import { PatModule } from 'src/f16/pat/pat.module';
import { ReProcressController } from './re-procress.controller';
import { JwtService } from '@nestjs/jwt';


@Module({
    imports: [InsModule,
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
        LabfuModule,],
    controllers: [ReProcressController],
    providers: [ReProcressService, PrismaHospital, PrismaFinance,JwtService],

})
export class ReProcressModule { }
