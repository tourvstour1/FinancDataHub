import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConnectMophService } from './connect-moph.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Module({
  imports: [HttpModule],
  providers: [ConnectMophService, PrismaFinance],
  exports: [ConnectMophService],
})
export class ConnectMophModule { }
