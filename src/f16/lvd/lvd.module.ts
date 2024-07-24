import { Module } from '@nestjs/common';
import { LvdService } from './lvd.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Module({
  providers: [LvdService, PrismaFinance],
  exports: [LvdService],
})
export class LvdModule {}
