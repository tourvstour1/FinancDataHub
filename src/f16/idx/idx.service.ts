import { Injectable } from '@nestjs/common';
import { t_idx } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class IdxService {
  constructor(readonly prisma: PrismaFinance) {}

  createIdx = async (idx: t_idx[]) => {
    const listSize = 1000;
    const listData: Array<t_idx[]> = [];

    if (idx.length > 0) {
      for (let i = 0; i < idx.length; i += listSize) {
        const item = idx.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      return 0;
    } else {
      return 0;
    }
  };

  findAndDelete = async (idxlist: Array<t_idx[]>) => {
    return await new Promise((resolve, reject) => {
      const idxListSize = idxlist.length;
      let round = 0;
      idxlist.forEach(async (idx) => {
        const an: string[] = [];

        idx.forEach((i) => {
          if (i.an !== '') {
            an.push(i.an);
          }
        });
        await this.prisma.t_idx
          .deleteMany({
            where: {
              an: { in: idx.map((i) => i.an) },
            },
          })
          .finally(() => this.prisma.$disconnect());

        round = round + 1;

        if (idxListSize === round) {
          resolve(true);
        }
      });
    });
  };

  insert = async (idxlist: Array<t_idx[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = idxlist.length;
      let round = 0;
      idxlist.forEach(async (idx) => {
        await this.prisma.t_idx
          .createMany({
            data: idx,
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
