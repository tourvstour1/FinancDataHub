import { Module } from '@nestjs/common';
import { AerService } from './aer.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Module({
  providers: [AerService, PrismaFinance],
  exports: [AerService],
})
export class AerModule {}
