import { Injectable } from '@nestjs/common';
import { t_cht } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class ChtService {
  constructor(readonly prisma: PrismaFinance) {}

  createCht = async (cht: t_cht[]) => {
    const listSize = 1000;
    const listData = [];

    for (let i = 0; i < cht.length; i += listSize) {
      const item = cht.slice(i, i + listSize);
      listData.push(item);
    }
    await this.findAndDelete(listData);
    await this.insert(listData);
    return 0;
  };

  findAndDelete = async (chtlist: Array<t_cht[]>) => {
    return await new Promise((resolve, reject) => {
      const apdListSzie = chtlist.length;
      let round = 0;
      chtlist.forEach(async (cht) => {
        await this.prisma.t_cht
          .deleteMany({
            where: {
              seq: { in: cht.map((i) => i.seq) },
            },
          })
          .finally(() => this.prisma.$disconnect());

        await this.prisma.t_cht
          .deleteMany({
            where: {
              an: { in: cht.map((i) => i.an) },
            },
          })
          .finally(() => this.prisma.$disconnect());

        round = round + 1;

        if (apdListSzie === round) {
          resolve(true);
        }
      });
    });
  };

  insert = async (chtlist: Array<t_cht[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = chtlist.length;
      let round = 0;
      chtlist.forEach(async (cht) => {
        await this.prisma.t_cht
          .createMany({
            data: cht,
          })
          .finally(() => this.prisma.$disconnect());

        round = round + 1;

        if (listSize === round) {
          resolve(true);
        }
      });
    });
  };
}
