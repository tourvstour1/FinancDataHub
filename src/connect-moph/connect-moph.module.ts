import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConnectMophService } from './connect-moph.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { AxiosProvider } from 'src/provider/axios.provicer';

@Module({
  imports: [HttpModule],
  providers: [ConnectMophService, PrismaFinance, AxiosProvider],
  exports: [ConnectMophService],
})
export class ConnectMophModule { }
