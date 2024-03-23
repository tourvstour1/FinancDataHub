import { Injectable } from '@nestjs/common';
import { t_iop } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class IopService {
  constructor(readonly prisma: PrismaFinance) {}

  createIop = async (iop: t_iop[]) => {
    const listSize = 1000;
    const listData: Array<t_iop[]> = [];

    if (iop.length > 0) {
      for (let i = 0; i < iop.length; i += listSize) {
        const item = iop.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      return 0;
    } else {
      return 0;
    }
  };

  findAndDelete = async (ioplist: Array<t_iop[]>) => {
    return await new Promise((resolve, reject) => {
      const iopListSzie = ioplist.length;
      let round = 0;
      ioplist.forEach(async (iop) => {
        await this.prisma.t_iop
          .deleteMany({
            where: {
              an: { in: iop.map((i) => i.an) },
            },
          })
          .finally(() => this.prisma.$disconnect());

        round = round + 1;

        if (iopListSzie === round) {
          resolve(true);
        }
      });
    });
  };

  insert = async (iopList: Array<t_iop[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = iopList.length;
      let round = 0;
      iopList.forEach(async (iop) => {
        await this.prisma.t_iop
          .createMany({
            data: iop,
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
