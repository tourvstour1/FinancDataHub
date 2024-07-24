import { Module } from '@nestjs/common';
import { InsService } from './ins.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ins } from './ins.entity';
@Module({
  imports: [],
  providers: [InsService, PrismaFinance],
  exports: [InsService],
})
export class InsModule {}
