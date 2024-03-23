import { Module } from '@nestjs/common';
import { WorkListService } from './work-list.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { WorkListController } from './work-list.controller';
import { InsModule } from 'src/f16/ins/ins.module';
import { ChtModule } from 'src/f16/cht/cht.module';

@Module({
  imports: [InsModule, ChtModule],
  controllers: [WorkListController],
  providers: [WorkListService, PrismaFinance],
  exports: [WorkListService],
})
export class WorkListModule {}
