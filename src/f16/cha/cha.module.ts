import { Module } from '@nestjs/common';
import { ChaService } from './cha.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Module({
  providers: [ChaService, PrismaFinance],
  exports: [ChaService],
})
export class ChaModule {}
