import { Injectable } from '@nestjs/common';
import { t_dru } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class DruService {
  constructor(readonly prisma: PrismaFinance) { }

  createDru = async (dru: t_dru[]) => {
    const listSize = 1000;
    const listData: Array<t_dru[]> = [];

    if (dru.length > 0) {
      for (let i = 0; i < dru.length; i += listSize) {
        const item = dru.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      return 0;
    } else {
      return 0;
    }
  };

  findAndDelete = async (drulist: Array<t_dru[]>) => {
    console.log('start dru delete');

    return await new Promise((resolve, reject) => {
      const apdListSzie = drulist.length;
      let round = 0;
      drulist.forEach(async (dru) => {
        const seq: string[] = [];
        const an: string[] = [];

        dru.forEach((i) => {
          if (i.an !== '') {
            an.push(i.an);
          }

          if (i.seq !== '') {
            seq.push(i.seq);
          }
        });

        if (seq.length > 0) {
          await this.prisma.t_dru
            .deleteMany({
              where: {
                seq: { in: seq },
              },
            })
        }

        if (an.length > 0) {
          await this.prisma.t_dru
            .deleteMany({
              where: {
                an: { in: an },
              },
            })
        }

        round = round + 1;
        console.log('dru round=' + round.toString() + ' max=' + apdListSzie.toString());

        if (apdListSzie === round) {
          resolve(true);
        }
      });
    });
  };

  insert = async (druList: Array<t_dru[]>) => {
    return await new Promise((resolve, reject) => {
      console.log('start create dru');
      console.log(druList.length);

      const listSize = druList.length;
      let round = 0;
      druList.forEach(async (dru) => {
        console.log(dru.length);
        await this.prisma.t_dru.createMany({
          data: dru,
        })
        round = round + 1;

        if (listSize === round) {
          resolve(true)
        }
      });
    });
  };
}
