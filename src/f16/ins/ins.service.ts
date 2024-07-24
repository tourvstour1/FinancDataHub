import { Injectable } from '@nestjs/common';
import { t_ins } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class InsService {
  constructor(private prisma: PrismaFinance) { }

  createIns = async (ins: t_ins[]) => {
    const listSize = 1000;
    const listData: Array<t_ins[]> = [];

    if (ins.length > 0) {
      for (let i = 0; i < ins.length; i += listSize) {
        const item = ins.slice(i, i + listSize);
        listData.push(item);
      }
      await this.creatAndUpdate(listData);
      await this.insert(listData)
      return 0;
    } else {
      return 0;
    }
  };

  creatAndUpdate = async (inslist: Array<t_ins[]>) => {
    console.log('ins Start');

    return await new Promise((resolve, reject) => {
      const insListSzie = inslist.length;
      let round = 0;

      inslist.forEach(async (ins) => {
        const itemSeq: t_ins[] = []
        const ItemAn: t_ins[] = []

        ins.forEach(itemIns => {
          if (itemIns.an !== '') {
            ItemAn.push(itemIns)
          }

          if (itemIns.seq !== '') {
            itemSeq.push(itemIns)
          }
        });

        if (ItemAn.length > 0) {
       
          const itemInsDel = await this.prisma.t_ins.findMany({
            where: {
              an: {
                in: ItemAn.map(i => i.an)
              }
            }
          })

          await this.prisma.t_ins.deleteMany({
            where: {
              an: {
                in: itemInsDel.map(i => i.an).reduce((pre, cur) => pre.includes(cur) ? pre : pre.concat(cur), [])
              }
            }
          })

        }

        if (itemSeq.length > 0) {
          const itemInsDel = await this.prisma.t_ins.findMany({
            where: {
              seq: {
                in: itemSeq.map(i => i.seq)
              }
            }
          })

          await this.prisma.t_ins.deleteMany({
            where: {
              seq: {
                in: itemInsDel.map(i => i.seq).reduce((pre, cur) => pre.includes(cur) ? pre : pre.concat(cur), [])
              }
            }
          })

        } 

        round = round + 1;
        this.compless(resolve, round, insListSzie)
      });
    })
  }

  compless = (res: any, count: number, max: number) => {
    console.log({ max, count });
    if (max === count) {
      return res(true)
    }
  }

  insert = async (insList: Array<t_ins[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = insList.length;
      let round = 0;
      insList.forEach(async (ins) => {
        await this.prisma.t_ins.createMany({
          data: ins,
        })
        round = round + 1;

        if (listSize === round) {
          resolve(true);
        }
      });
    });
  };
}
