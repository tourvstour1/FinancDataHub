import { Injectable } from '@nestjs/common';
import { t_cht } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class ChtService {
  constructor(readonly prisma: PrismaFinance) {}

  createCht = async (cht: t_cht[]) => {
    if (cht.length === 0) return 0;
    const listSize = 1000;
    const listData = [];

    for (let i = 0; i < cht.length; i += listSize) {
      const item = cht.slice(i, i + listSize);
      listData.push(item);
    }
    await this.findAndDelete(listData);
    await this.insert(listData);
    return 0;
  };

  findAndDelete = async (chtlist: Array<t_cht[]>) => {
    return await new Promise((resolve, reject) => {
      const apdListSzie = chtlist.length;
      let round = 0;
      chtlist.forEach(async (cht) => {
        const seq: string[] = [];
        const an: string[] = [];

        cht.forEach((i) => {
          if (i.seq !== '') {
            seq.push(i.seq);
          }
        });

        cht.forEach((i) => {
          if (i.an !== '') {
            an.push(i.an);
          }
        });
        await this.prisma.t_cht
          .deleteMany({
            where: {
              seq: { in: seq },
            },
          })
          .finally(() => this.prisma.$disconnect());

        await this.prisma.t_cht
          .deleteMany({
            where: {
              an: { in: an },
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

  insert = async (chtlist: Array<t_cht[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = chtlist.length;
      let round = 0;
      chtlist.forEach(async (cht) => {
        await this.prisma.t_cht
          .createMany({
            data: cht,
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
