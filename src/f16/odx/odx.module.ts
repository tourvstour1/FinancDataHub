import { Module } from '@nestjs/common';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { OdxService } from './odx.service';

@Module({
  providers: [PrismaFinance, OdxService],
  exports: [OdxService],
})
export class OdxModule {}
