import { Injectable } from '@nestjs/common';
import { t_irf } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class IrfService {
  constructor(readonly prisma: PrismaFinance) {}

  createIrf = async (irf: t_irf[]) => {
    const listSize = 1000;
    const listData: Array<t_irf[]> = [];

    if (irf.length > 0) {
      for (let i = 0; i < irf.length; i += listSize) {
        const item = irf.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      return 0;
    } else {
      return 0;
    }
  };

  findAndDelete = async (irflist: Array<t_irf[]>) => {
    return await new Promise((resolve, reject) => {
      const irfListSzie = irflist.length;
      let round = 0;
      irflist.forEach(async (irf) => {
        await this.prisma.t_irf.deleteMany({
          where: {
            an: { in: irf.map((i) => i.an) },
          },
        });

        round = round + 1;

        if (irfListSzie === round) {
          resolve(true);
        }
      });
    });
  };

  insert = async (irfList: Array<t_irf[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = irfList.length;
      let round = 0;
      irfList.forEach(async (irf) => {
        await this.prisma.t_irf.createMany({
          data: irf,
        });

        round = round + 1;

        if (listSize === round) {
          resolve(true);
        }
      });
    });
  };
}
