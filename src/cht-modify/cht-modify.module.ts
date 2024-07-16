import { Module } from '@nestjs/common';
import { ChtModifyService } from './cht-modify.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { ReProcressService } from 'src/re-procress/re-procress.service';
import { PrismaHospital } from 'src/prisma/prisma.service.hospital';
import { InsService } from 'src/f16/ins/ins.service';

@Module({
  
    providers: [ChtModifyService, PrismaFinance, PrismaHospital]
})
export class ChtModifyModule { }
