import { Module } from '@nestjs/common';
import { LabfuService } from './labfu.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Module({
  providers: [LabfuService, PrismaFinance],
  exports: [LabfuService],
})
export class LabfuModule {}
