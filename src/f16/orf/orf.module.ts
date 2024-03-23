import { Module } from '@nestjs/common';
import { OrfService } from './orf.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Module({
  providers: [OrfService, PrismaFinance],
  exports: [OrfService],
})
export class OrfModule {}
