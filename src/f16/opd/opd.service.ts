import { Injectable } from '@nestjs/common';
import { t_opd } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class OpdService {
  constructor(readonly prisma: PrismaFinance) {}

  createOpd = async (opd: t_opd[]) => {
    const listSize = 1000;
    const listData: Array<t_opd[]> = [];

    if (opd.length > 0) {
      for (let i = 0; i < opd.length; i += listSize) {
        const item = opd.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      return 0;
    } else {
      return 0;
    }
  };

  findAndDelete = async (opdlist: Array<t_opd[]>) => {
    return await new Promise((resolve, reject) => {
      const opdListSzie = opdlist.length;
      let round = 0;

      opdlist.forEach(async (opd) => {
        await this.prisma.t_opd
          .deleteMany({
            where: {
              seq: { in: opd.map((i) => i.seq) },
            },
          })
          .finally(() => this.prisma.$disconnect());
        round = round + 1;

        if (opdListSzie === round) {
          resolve(true);
        }
      });
    });
  };

  insert = async (opdList: Array<t_opd[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = opdList.length;
      let round = 0;
      opdList.forEach(async (opd) => {
        await this.prisma.t_opd
          .createMany({
            data: opd,
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
