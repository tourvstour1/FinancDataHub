import { Injectable } from '@nestjs/common';
import { t_ipd } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class IpdService {
  constructor(readonly prisma: PrismaFinance) {}

  createIpd = async (ipd: t_ipd[]) => {
    const listSize = 1000;
    const listData: Array<t_ipd[]> = [];

    if (ipd.length > 0) {
      for (let i = 0; i < ipd.length; i += listSize) {
        const item = ipd.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      return 0;
    } else {
      return 0;
    }
  };

  findAndDelete = async (ipdlist: Array<t_ipd[]>) => {
    return await new Promise((resolve, reject) => {
      const ipdListSzie = ipdlist.length;
      let round = 0;
      ipdlist.forEach(async (ipd) => {
        await this.prisma
          .$transaction([
            this.prisma.t_ins.deleteMany({
              where: {
                an: { in: ipd.map((i) => i.an) },
              },
            }),

            this.prisma.t_ipd.deleteMany({
              where: {
                an: { in: ipd.map((i) => i.an) },
              },
            }),
          ])
          .finally(() => this.prisma.$disconnect());

        round = round + 1;

        if (ipdListSzie === round) {
          resolve(true);
        }
      });
    });
  };

  insert = async (ipdList: Array<t_ipd[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = ipdList.length;
      let round = 0;
      ipdList.forEach(async (ipd) => {
        await this.prisma.t_ipd
          .createMany({
            data: ipd,
          })
          .finally(() => this.prisma.$disconnect())

        round = round + 1;

        if (listSize === round) {
          resolve(true);
        }
      });
    });
  };
}
