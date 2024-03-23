import { Injectable } from '@nestjs/common';
import { t_dru } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class DruService {
  constructor(readonly prisma: PrismaFinance) {}

  createDru = async (dru: t_dru[]) => {
    const listSize = 1000;
    const listData: Array<t_dru[]> = [];

    if (dru.length > 0) {
      for (let i = 0; i < dru.length; i += listSize) {
        const item = dru.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      return 0;
    } else {
      return 0;
    }
  };

  findAndDelete = async (drulist: Array<t_dru[]>) => {
    return await new Promise((resolve, reject) => {
      const apdListSzie = drulist.length;
      let round = 0;
      drulist.forEach(async (dru) => {
        await this.prisma.t_dru
          .deleteMany({
            where: {
              seq: { in: dru.map((i) => i.seq) },
            },
          })
          .finally(() => this.prisma.$disconnect());

        await this.prisma.t_dru
          .deleteMany({
            where: {
              an: { in: dru.map((i) => i.an) },
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

  insert = async (druList: Array<t_dru[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = druList.length;
      let round = 0;
      druList.forEach(async (dru) => {
        await this.prisma.t_dru
          .createMany({
            data: dru,
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
