import { Module } from '@nestjs/common';
import { OpdService } from './opd.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Module({
  providers: [OpdService, PrismaFinance],
  exports: [OpdService],
})
export class OpdModule {}
