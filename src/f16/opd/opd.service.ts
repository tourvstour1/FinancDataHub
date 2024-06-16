import { Injectable } from '@nestjs/common';
import { t_opd } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { ModelOpdDuplicates } from './opd.entity';

@Injectable()
export class OpdService {
  constructor(readonly prisma: PrismaFinance) { }

  createOpd = async (opd: t_opd[]) => {

    console.log('start opd');

    const listSize = 1000;
    const listData: Array<t_opd[]> = [];

    if (opd.length > 0) {
      for (let i = 0; i < opd.length; i += listSize) {
        const item = opd.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      return 0;
    } else {
      return 0;
    }
  };

  findAndDelete = async (opdlist: Array<t_opd[]>) => {
    return await new Promise((resolve, reject) => {
      const opdListSzie = opdlist.length;
      let round = 0;

      opdlist.forEach(async (opd) => {
        const seq: string[] = [];

        await Promise.all(opd.map((i) => {
          if (i.seq !== '') {
            seq.push(i.seq);
          }
        }))
        console.log(seq.length);

        await this.prisma.t_opd.deleteMany({
          where: {
            seq: { in: seq },
          },
        })
        round = round + 1;

        if (opdListSzie === round) {
          resolve(true);
        }
      });
    });
  };

  insert = async (opdList: Array<t_opd[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = opdList.length;
      let round = 0;
      opdList.forEach(async (opd) => {
        await this.prisma.t_opd.createMany({
          data: opd,
        })
        round = round + 1;

        if (listSize === round) {
          resolve(true);
          await this.clearDuplicates()
        }
      });
    });
  };

  clearDuplicates = async () => {
    const getDuplicate = await this.prisma.$queryRawUnsafe(`
    SELECT seq,count(seq) as seq_length FROM t_opd GROUP BY seq HAVING count(seq)>1
    `) as ModelOpdDuplicates[]

    if (getDuplicate.length > 0) {
      const duplicateSeqs = getDuplicate.map(seq => seq.seq)
      const getSeqOpd = await this.prisma.t_opd.findMany({
        select: {
          id: false,
          hn: true,
          clinic: true,
          dateopd: true,
          timeopd: true,
          seq: true,
          uuc: true,
          detail: true,
          btemp: true,
          sbp: true,
          dbp: true,
          pr: true,
          rr: true,
          optype: true,
          typein: true,
          typeout: true,
        },
        where: {
          seq: {
            in: duplicateSeqs
          }
        },
        distinct: 'seq'
      })

      await this.prisma.t_opd.deleteMany({
        where: {
          seq: {
            in: duplicateSeqs
          }
        }
      })

      await this.prisma.t_opd.createMany({
        data: getSeqOpd
      })
    }
  }
}
