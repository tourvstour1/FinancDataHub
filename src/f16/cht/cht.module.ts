import { Module } from '@nestjs/common';
import { ChtService } from './cht.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cht } from './cht.entity';

@Module({
  imports: [],
  providers: [ChtService, PrismaFinance],
  exports: [ChtService],
})
export class ChtModule {}
