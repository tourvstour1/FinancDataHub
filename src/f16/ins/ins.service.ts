import { Injectable } from '@nestjs/common';
import { t_ins } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class InsService {
  constructor(private prisma: PrismaFinance) {}

  createIns = async (ins: t_ins[]) => {
    const listSize = 1000;
    const listData: Array<t_ins[]> = [];

    if (ins.length > 0) {
      for (let i = 0; i < ins.length; i += listSize) {
        const item = ins.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      return 0;
    } else {
      return 0;
    }
  };

  findAndDelete = async (inslist: Array<t_ins[]>) => {
    return await new Promise((resolve, reject) => {
      const insListSzie = inslist.length;
      let round = 0;
      inslist.forEach(async (ins) => {
        await this.prisma.t_ins
          .deleteMany({
            where: {
              seq: { in: ins.map((i) => i.seq) },
            },
          })
          .finally(() => this.prisma.$disconnect());

        await this.prisma.t_ins
          .deleteMany({
            where: {
              an: { in: ins.map((i) => i.an) },
            },
          })
          .finally(() => this.prisma.$disconnect());

        round = round + 1;

        if (insListSzie === round) {
          resolve(true);
        }
      });
    });
  };

  insert = async (insList: Array<t_ins[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = insList.length;
      let round = 0;
      insList.forEach(async (ins) => {
        await this.prisma.t_ins
          .createMany({
            data: ins,
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
