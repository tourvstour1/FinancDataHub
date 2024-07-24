import { Injectable } from '@nestjs/common';
import { t_labfu } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class LabfuService {
  constructor(readonly prisma: PrismaFinance) {}

  createLabfu = async (labfu: t_labfu[]) => {
    const listSize = 1000;
    const listData: Array<t_labfu[]> = [];

    if (labfu.length > 0) {
      for (let i = 0; i < labfu.length; i += listSize) {
        const item = labfu.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      return 0;
    } else {
      return 0;
    }
  };

  findAndDelete = async (labfulist: Array<t_labfu[]>) => {
    return await new Promise((resolve, reject) => {
      const labfuListSzie = labfulist.length;
      let round = 0;
      labfulist.forEach(async (labfu) => {
        const seq: string[] = [];

        labfu.forEach((i) => {
          if (i.seq !== '') {
            seq.push(i.seq);
          }
        });

        await this.prisma.t_labfu
          .deleteMany({
            where: {
              seq: { in: seq },
            },
          })
          .finally(() => this.prisma.$disconnect());

        round = round + 1;

        if (labfuListSzie === round) {
          resolve(true);
        }
      });
    });
  };

  insert = async (labfuList: Array<t_labfu[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = labfuList.length;
      let round = 0;
      labfuList.forEach(async (labfu) => {
        await this.prisma.t_labfu
          .createMany({
            data: labfu,
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
