import { Injectable } from '@nestjs/common';
import { t_pat } from 'prisma/generated/finanace-client';

import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { ModelPatDuplicates } from './pat.entity';

@Injectable()
export class PatService {
  constructor(readonly prisma: PrismaFinance) { }

  createPat = async (pat: t_pat[]) => {

    console.log("start item pat");
    
    const listSize = 1000;
    const listData: Array<t_pat[]> = [];

    if (pat.length > 0) {
      for (let i = 0; i < pat.length; i += listSize) {
        const item = pat.slice(i, i + listSize);
        listData.push(item);
      }
      await this.findAndDelete(listData);
      await this.insert(listData);
      return 0;
    } else {
      return 0;
    }
  };

  findAndDelete = async (patlist: Array<t_pat[]>): Promise<boolean> => {
    return await new Promise((resolve, reject) => {
      const patListSzie = patlist.length;
      let round = 0;
      patlist.forEach(async (pat) => {
        const hn: string[] = [];

        pat.forEach((i) => {
          if (i.hn !== '') {
            hn.push(i.hn);
          }
        });


        if (hn.length > 0) {
          await this.prisma.t_pat.deleteMany({
            where: {
              hn: {
                in: hn
              },
            },
          })
        }

        round = round + 1;
        console.log({ patListSzie, round });

        if (patListSzie === round) {
          resolve(true);
        }
      });
    });
  }

  insert = async (patList: Array<t_pat[]>) => {
    return await new Promise((resolve, reject) => {
      const listSize = patList.length;
      let round = 0;
      patList.forEach(async (pat) => {

        const findHn = await this.prisma.t_pat.findMany({
          where: {
            hn: {
              in: pat.map(i => i.hn).reduce((pre, cur) => pre.includes(cur) ? pre : pre.concat(cur), [])
            }
          }
        })


        if (findHn.length > 0) {
          const filterToUpdate = pat.filter(p => findHn.map(f => f.hn === p.hn))
          console.log('pat duplecate ' + filterToUpdate.length);
          await this.prisma.t_pat.createMany({
            data: filterToUpdate, skipDuplicates: true
          })
        } else {
          await this.prisma.t_pat.createMany({
            data: pat, skipDuplicates: true
          })
        }

        round = round + 1;

        if (listSize === round) {
          resolve(true);
          await this.clearDuplicates()
        }
      });
    });
  }

  clearDuplicates = async () => {

    const getDuplicate = await this.prisma.$queryRawUnsafe(`
    SELECT hn ,count(hn) FROM t_pat GROUP BY hn HAVING count(hn) >1
    `) as ModelPatDuplicates[]

    if (getDuplicate.length > 0) {
      const duplicateHns = getDuplicate.map(pat => pat.hn)

      const getPats = await this.prisma.t_pat.findMany({
        select: {
          id: false,
          hcode: true,
          hn: true,
          changwat: true,
          amphur: true,
          dob: true,
          sex: true,
          marriage: true,
          occupa: true,
          nation: true,
          person_id: true,
          namepat: true,
          title: true,
          fname: true,
          lname: true,
          idtype: true,
        },
        where: {
          hn: {
            in: duplicateHns
          }
        }, distinct: 'hn'
      })

      await this.prisma.t_pat.deleteMany({
        where: {
          hn: {
            in: duplicateHns
          }
        }
      })

      await this.prisma.t_pat.createMany({
        data: getPats
      })
    }
  }
}
