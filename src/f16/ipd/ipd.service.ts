import { Injectable } from '@nestjs/common';
import { t_ipd } from 'prisma/generated/finanace-client';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { ModelIpdDulpicates } from './ipd.entity';

@Injectable()
export class IpdService {
  constructor(readonly prisma: PrismaFinance) { }

  createIpd = async (ipd: t_ipd[]) => {
    const listSize = 1000;
    const listData: Array<t_ipd[]> = [];

    if (ipd.length > 0) {
      for (let i = 0; i < ipd.length; i += listSize) {
        const item = ipd.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      return 0;
    } else {
      return 0;
    }
  };

  findAndDelete = async (ipdlist: Array<t_ipd[]>) => {
    return await new Promise((resolve, reject) => {
      const ipdListSzie = ipdlist.length;
      let round = 0;
      ipdlist.forEach(async (ipd) => {
        const an: string[] = [];
        ipd.forEach((i) => {
          if (i.an !== '') {
            an.push(i.an);
          }
        });

        await this.prisma.t_ipd.deleteMany({
          where: {
            an: { in: an },
          },
        })

        round = round + 1;

        if (ipdListSzie === round) {
          resolve(true);
        }
      });
    });
  };

  insert = async (ipdList: Array<t_ipd[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = ipdList.length;
      let round = 0;
      ipdList.forEach(async (ipd: t_ipd[]) => {
        // console.log(ipd);
        await this.prisma.t_ipd.createMany({
          data: ipd
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
    SELECT an ,count(an) from t_ipd GROUP BY an HAVING count(an)>1`) as ModelIpdDulpicates[]

    if (getDuplicate.length > 0) {
      const duplicateAns = getDuplicate.map(an => an.an)

      const getAnIpd = await this.prisma.t_ipd.findMany({
        select: {
          id: false,
          hn: true,
          an: true,
          dateadm: true,
          timeadm: true,
          datedsc: true,
          timedsc: true,
          dischs: true,
          discht: true,
          warddsc: true,
          dept: true,
          adm_w: true,
          uuc: true,
          svctype: true,
        },
        where: {
          an: {
            in: duplicateAns
          }
        }, distinct: 'an'
      })

      await this.prisma.t_ipd.deleteMany({
        where: {
          an: {
            in: duplicateAns
          }
        }
      })

      await this.prisma.t_ipd.createMany({
        data: getAnIpd
      })
    }
  }
}
