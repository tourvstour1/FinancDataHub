import { Module } from '@nestjs/common';
import { IrfService } from './irf.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Module({
  providers: [IrfService, PrismaFinance],
  exports: [IrfService],
})
export class IrfModule {}
