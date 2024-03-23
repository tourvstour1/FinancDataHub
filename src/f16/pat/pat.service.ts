import { Injectable } from '@nestjs/common';
import { t_pat } from 'prisma/generated/finanace-client';

import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class PatService {
  constructor(readonly prisma: PrismaFinance) {}

  createPat = async (pat: t_pat[]) => {
    const listSize = 1000;
    const listData: Array<t_pat[]> = [];

    if (pat.length > 0) {
      for (let i = 0; i < pat.length; i += listSize) {
        const item = pat.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      return 0;
    } else {
      return 0;
    }
  };

  findAndDelete = async (patlist: Array<t_pat[]>) => {
    return await new Promise((resolve, reject) => {
      const patListSzie = patlist.length;
      let round = 0;
      patlist.forEach(async (pat) => {
        this.prisma.t_pat
          .deleteMany({
            where: {
              hn: { in: pat.map((i) => i.hn) },
            },
          })
          .finally(() => this.prisma.$disconnect());
        round = round + 1;

        if (patListSzie === round) {
          resolve(true);
        }
      });
    });
  };

  insert = async (patList: Array<t_pat[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = patList.length;
      let round = 0;
      patList.forEach(async (pat) => {
        await this.prisma.t_pat
          .createMany({
            data: pat,
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
