import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProcessModule } from './process/process.module';
import { WorkListController } from './work-list/work-list.controller';
import { PrismaFinance } from './prisma/prisma.service.finanec';
import { Edit16fController } from './edit-16f/edit-16f.controller';
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
import { ScheduleService } from './schedule/schedule.service';
import { ChtModifyService } from './cht-modify/cht-modify.service';
import { ReProcressService } from './re-procress/re-procress.service';
import { InsService } from './f16/ins/ins.service';
import { AdpService } from './f16/adp/adp.service';
import { AerService } from './f16/aer/aer.service';
import { ChaService } from './f16/cha/cha.service';
import { ChtService } from './f16/cht/cht.service';
import { DruService } from './f16/dru/dru.service';
import { IdxService } from './f16/idx/idx.service';
import { IopService } from './f16/iop/iop.service';
import { IpdService } from './f16/ipd/ipd.service';
import { IrfService } from './f16/irf/irf.service';
import { LabfuService } from './f16/labfu/labfu.service';
import { LvdService } from './f16/lvd/lvd.service';
import { OdxService } from './f16/odx/odx.service';
import { OopService } from './f16/oop/oop.service';
import { OpdService } from './f16/opd/opd.service';
import { OrfService } from './f16/orf/orf.service';
import { PatService } from './f16/pat/pat.service';
import { WorkListService } from './work-list/work-list.service';
import { Edit16fService } from './edit-16f/edit-16f.service';
import { AxiosProvider } from './provider/axios.provicer';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';

const envConfig = {
  isGlobal: true,
  envFilePath: `.env`,
};

@Module({
  imports: [
    ConfigModule.forRoot(envConfig),
    ProcessModule,
    ClaimFdhModule,
    ConnectMophModule,
    HttpModule,
    EventModule,
    CatalogsModule,
    CheckErrorModule,
    HistoryListModule,
    LoginModule,
    ReProcressModule,
    JwtAppModule,
  ],
  controllers: [AppController, WorkListController, Edit16fController, ClaimFdhController, HistoryListController, LoginController, DashboardController],
  providers: [AppService, InsService, PatService,
    WorkListService,
    Edit16fService,
    OpdService, OrfService, OdxService, OopService, IpdService, IrfService, IdxService, IopService, ChtService, ChaService, AerService, AdpService, LvdService, DruService, LabfuService,
    PrismaFinance, ClaimFdhService, ConnectMophService, HistoryListService, LoginService, PrismaHospital, JwtAppService, JwtService, ScheduleService, ChtModifyService, ReProcressService, AxiosProvider, DashboardService],
})
export class AppModule { }
