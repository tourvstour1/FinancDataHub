import { Injectable } from '@nestjs/common';
import { t_oop } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class OopService {
  constructor(readonly prisma: PrismaFinance) {}

  createOop = async (oop: t_oop[]) => {
    const listSize = 1000;
    const listData: Array<t_oop[]> = [];

    if (oop.length > 0) {
      for (let i = 0; i < oop.length; i += listSize) {
        const item = oop.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      return 0;
    } else {
      return 0;
    }
  };

  findAndDelete = async (odxlist: Array<t_oop[]>) => {
    return await new Promise((resolve, reject) => {
      const odxListSzie = odxlist.length;
      let round = 0;
      odxlist.forEach(async (odx) => {
        const seq: string[] = [];

        odx.forEach((i) => {
          if (i.seq !== '') {
            seq.push(i.seq);
          }
        });

        await this.prisma.t_oop
          .deleteMany({
            where: {
              seq: { in: seq },
            },
          })
          .finally(() => this.prisma.$disconnect());

        round = round + 1;

        if (odxListSzie === round) {
          resolve(true);
        }
      });
    });
  };

  insert = async (odxList: Array<t_oop[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = odxList.length;
      let round = 0;
      odxList.forEach(async (odx) => {
        await this.prisma.t_oop
          .createMany({
            data: odx,
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
