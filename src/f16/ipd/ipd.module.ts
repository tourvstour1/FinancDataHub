import { Module } from '@nestjs/common';
import { IpdService } from './ipd.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Module({
  providers: [IpdService, PrismaFinance],
  exports: [IpdService],
})
export class IpdModule {}
