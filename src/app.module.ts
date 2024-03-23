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
  ],
  controllers: [AppController, WorkListController, Edit16fController],
  providers: [AppService, PrismaFinance],
})
export class AppModule {}
