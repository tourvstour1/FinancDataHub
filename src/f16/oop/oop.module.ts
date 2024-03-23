import { Module } from '@nestjs/common';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { OopService } from './oop.service';

@Module({
  providers: [PrismaFinance, OopService],
  exports: [OopService],
})
export class OopModule {}
