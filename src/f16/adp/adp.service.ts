import { Injectable } from '@nestjs/common';
import { t_adp } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class AdpService {
  constructor(private prisma: PrismaFinance) {}

  createAdp = async (adp: t_adp[]) => {
    const listSize = 1000;
    const listData: Array<t_adp[]> = [];

    if (adp.length > 0) {
      for (let i = 0; i < adp.length; i += listSize) {
        const item = adp.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      return 0;
    } else {
      return 0;
    }
  };

  findAndDelete = async (adplist: Array<t_adp[]>) => {
    return await new Promise((resolve, reject) => {
      const adpListSzie = adplist.length;
      let round = 0;
      adplist.forEach(async (adp) => {
        await this.prisma.t_adp
          .deleteMany({
            where: {
              seq: { in: adp.map((i) => i.seq) },
            },
          })
          .finally(() => this.prisma.$disconnect());

        await this.prisma.t_adp
          .deleteMany({
            where: {
              an: { in: adp.map((i) => i.an) },
            },
          })
          .finally(() => this.prisma.$disconnect());

        round = round + 1;

        if (adpListSzie === round) {
          resolve(true);
        }
      });
    });
  };

  insert = async (adpList: Array<t_adp[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = adpList.length;
      let round = 0;
      adpList.forEach(async (adp) => {
        await this.prisma.t_adp
          .createMany({
            data: adp,
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
