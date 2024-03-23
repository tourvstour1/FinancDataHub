import { Module } from '@nestjs/common';
import { IopService } from './iop.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Module({
  providers: [IopService, PrismaFinance],
  exports: [IopService],
})
export class IopModule {}
