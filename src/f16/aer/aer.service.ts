import { Injectable } from '@nestjs/common';
import { t_aer } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class AerService {
  constructor(readonly prisma: PrismaFinance) { }

  createAer = async (aer: t_aer[]) => {
    const listSize = 1000;
    const listData: Array<t_aer[]> = [];

    if (aer.length > 0) {
      for (let i = 0; i < aer.length; i += listSize) {
        const item = aer.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      await this.clearNullAer()
      return 0;
    } else {
      return 0;
    }
  };

  clearNullAer = async () => {
    await this.prisma.t_aer.deleteMany({
      where: {
        OR: [
          {
            refer_no: '',
            aetype: '',
            ireftype: '',
            oreftype: ''
          },
          {
            refer_no: null,
            aetype:null,
      
          }
        ]
      }
    })
  }

  findAndDelete = async (aerList: Array<t_aer[]>) => {
    return await new Promise((resolve, reject) => {
      const apdListSzie = aerList.length;
      let round = 0;
      aerList.forEach(async (adp) => {
        const seq: string[] = [];
        const an: string[] = [];

        adp.forEach((i) => {
          if (i.seq !== '') {
            seq.push(i.seq);
          }
        });

        adp.forEach((i) => {
          if (i.an !== '') {
            an.push(i.an);
          }
        });

        await this.prisma.t_aer
          .deleteMany({
            where: {
              seq: { in: seq },
            },
          })
          .finally(() => this.prisma.$disconnect());

        await this.prisma.t_aer
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

  insert = async (aerList: Array<t_aer[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = aerList.length;
      let round = 0;
      aerList.forEach(async (adp) => {
        await this.prisma.t_aer
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
