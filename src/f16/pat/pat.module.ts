import { Module } from '@nestjs/common';
import { PatService } from './pat.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Module({
  providers: [PatService, PrismaFinance],
  exports: [PatService],
})
export class PatModule {}
