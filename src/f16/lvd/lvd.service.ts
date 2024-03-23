import { Injectable } from '@nestjs/common';
import { t_lvd } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class LvdService {
  constructor(readonly prisma: PrismaFinance) {}
  createLvd = async (lvd: t_lvd[]) => {
    const listSize = 1000;
    const listData: Array<t_lvd[]> = [];

    if (lvd.length > 0) {
      for (let i = 0; i < lvd.length; i += listSize) {
        const item = lvd.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      return 0;
    } else {
      return 0;
    }
  };

  findAndDelete = async (lvdlist: Array<t_lvd[]>) => {
    if (lvdlist.length < 1) return 0;

    return await new Promise((resolve, reject) => {
      const lvdListSzie = lvdlist.length;
      let round = 0;
      lvdlist.forEach(async (lvd) => {
        await this.prisma.t_lvd
          .deleteMany({
            where: {
              an: { in: lvd.map((i) => i.an) },
            },
          })
          .finally(() => this.prisma.$disconnect());

        round = round + 1;

        if (lvdListSzie === round) {
          resolve(true);
        }
      });
    });
  };

  insert = async (lvdList: Array<t_lvd[]>) => {
    if (lvdList.length < 1) return 0;
    return await new Promise((resolve, reject) => {
      const listSize = lvdList.length;
      let round = 0;
      lvdList.forEach(async (lvd) => {
        await this.prisma.t_lvd
          .createMany({
            data: lvd,
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
