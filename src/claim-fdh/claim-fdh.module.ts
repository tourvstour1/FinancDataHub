import { Module } from '@nestjs/common';
import { ClaimFdhService } from './claim-fdh.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { ConnectMophModule } from 'src/connect-moph/connect-moph.module';

@Module({
  imports: [ConnectMophModule],
  providers: [ClaimFdhService, PrismaFinance],
  exports: [ClaimFdhService],
})
export class ClaimFdhModule {}
