import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProcessModule } from './process/process.module';
import { WorkListController } from './work-list/work-list.controller';
import { WorkListModule } from './work-list/work-list.module';
import { PrismaFinance } from './prisma/prisma.service.finanec';
import { Edit16fController } from './edit-16f/edit-16f.controller';
import { Edit16fModule } from './edit-16f/edit-16f.module';
import { ClaimFdhController } from './claim-fdh/claim-fdh.controller';
import { ClaimFdhService } from './claim-fdh/claim-fdh.service';
import { ClaimFdhModule } from './claim-fdh/claim-fdh.module';
import { ConnectMophService } from './connect-moph/connect-moph.service';
import { ConnectMophModule } from './connect-moph/connect-moph.module';
import { HttpModule } from '@nestjs/axios';
import { EventModule } from './event/event.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import { CheckErrorModule } from './check-error/check-error.module';
import { HistoryListController } from './history-list/history-list.controller';
import { HistoryListService } from './history-list/history-list.service';
import { HistoryListModule } from './history-list/history-list.module';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { LoginModule } from './login/login.module';
import { ReProcressModule } from './re-procress/re-procress.module';
import { PrismaHospital } from './prisma/prisma.service.hospital';
import { JwtAppModule } from './jwt-app/jwt-app.module';
import { JwtAppService } from './jwt-app/jwt-app.service';
import { JwtService } from '@nestjs/jwt';

const envConfig = {
  isGlobal: true,
  envFilePath: `.env`,
};

@Module({
  imports: [
    ConfigModule.forRoot(envConfig),
    ProcessModule,
    WorkListModule,
    Edit16fModule,
    ClaimFdhModule,
    ConnectMophModule,
    HttpModule,
    EventModule,
    CatalogsModule,
    CheckErrorModule,
    HistoryListModule,
    LoginModule,
    ReProcressModule,
    JwtAppModule 
  ],
  controllers: [AppController, WorkListController, Edit16fController, ClaimFdhController, HistoryListController, LoginController],
  providers: [AppService, PrismaFinance, ClaimFdhService, ConnectMophService, HistoryListService, LoginService, PrismaHospital,JwtAppService,JwtService],
})
export class AppModule { }
