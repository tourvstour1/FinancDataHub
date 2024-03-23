import { Module } from '@nestjs/common';
import { AdpService } from './adp.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Module({
  providers: [AdpService, PrismaFinance],
  exports: [AdpService],
})
export class AdpModule {}
