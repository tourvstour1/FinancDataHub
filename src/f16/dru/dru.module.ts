import { Module } from '@nestjs/common';
import { DruService } from './dru.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Module({
  providers: [DruService, PrismaFinance],
  exports: [DruService],
})
export class DruModule {}
