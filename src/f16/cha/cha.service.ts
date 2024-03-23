import { Injectable } from '@nestjs/common';
import { t_cha } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class ChaService {
  constructor(readonly prisma: PrismaFinance) {}

  createCha = async (cha: t_cha[]) => {
    const listSize = 1000;
    const listData: Array<t_cha[]> = [];

    if (cha.length > 0) {
      for (let i = 0; i < cha.length; i += listSize) {
        const item = cha.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      return 0;
    } else {
      return 0;
    }
  };
  findAndDelete = async (chalist: Array<t_cha[]>) => {
    return await new Promise((resolve, reject) => {
      const apdListSzie = chalist.length;
      let round = 0;
      chalist.forEach(async (cha) => {
        await this.prisma.t_cha
          .deleteMany({
            where: {
              seq: { in: cha.map((i) => i.seq) },
            },
          })
          .finally(() => this.prisma.$disconnect());

        await this.prisma.t_cha
          .deleteMany({
            where: {
              an: { in: cha.map((i) => i.an) },
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

  insert = async (chalist: Array<t_cha[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = chalist.length;
      let round = 0;
      chalist.forEach(async (cha) => {
        await this.prisma.t_cha
          .createMany({
            data: cha,
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
