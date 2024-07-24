import { Module } from '@nestjs/common';
import { IdxService } from './idx.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Module({
  providers: [IdxService, PrismaFinance],
  exports: [IdxService],
})
export class IdxModule {}
