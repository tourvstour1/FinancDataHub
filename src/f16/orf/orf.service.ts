import { Injectable } from '@nestjs/common';
import { t_orf } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class OrfService {
  constructor(private prisma: PrismaFinance) {}

  createOrf = async (orf: t_orf[]) => {
    const listSize = 1000;
    const listData: Array<t_orf[]> = [];

    if (orf.length > 0) {
      for (let i = 0; i < orf.length; i += listSize) {
        const item = orf.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      return 0;
    } else {
      return 0;
    }
  };

  findAndDelete = async (orflist: Array<t_orf[]>) => {
    return await new Promise((resolve, reject) => {
      const orfListSzie = orflist.length;
      let round = 0;
      orflist.forEach(async (orf) => {
        const seq: string[] = [];

        orf.forEach((i) => {
          if (i.seq !== '') {
            seq.push(i.seq);
          }
        });
        await this.prisma.t_orf
          .deleteMany({
            where: {
              seq: { in: seq },
            },
          })
          .finally(() => this.prisma.$disconnect());

        round = round + 1;

        if (orfListSzie === round) {
          resolve(true);
        }
      });
    });
  };

  insert = async (orfList: Array<t_orf[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = orfList.length;
      let round = 0;
      orfList.forEach(async (orf) => {
        await this.prisma.t_orf
          .createMany({
            data: orf,
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
