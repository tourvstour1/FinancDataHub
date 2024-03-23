import { Injectable } from '@nestjs/common';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class WorkListService {
  constructor(readonly finance: PrismaFinance) {}

  opdListSerive = async (startDate: string, endDate: string) => {
    const start = startDate.replaceAll('-', '');
    const end = endDate.replaceAll('-', '');
    console.log(start);

    
    const opd = await this.finance.t_opd
      .findMany({
        select: {
          id: true,
          hn: true,
          seq: true,
          dateopd: true,
        },
        where: {
          dateopd: {
            gte: start,
            lte: end,
          },
        },
      })
      .then((opdItem) => {
        return opdItem.map((item) => {
          for (let e in item) {
            if (typeof item[e] === 'bigint') {
              Object.assign(item, {
                [e]: item[e].toString(),
              });
            }
          }
          return item;
        });
      });

    const pat = await this.finance.t_pat
      .findMany({
        select: {
          id: true,
          hn: true,
          title: true,
          fname: true,
          lname: true,
          person_id: true,
        },
        where: { hn: { in: opd.map((i) => i.hn) } },
      })
      .then((patItem) => {
        return patItem.map((item) => {
          for (let event in item) {
            if (typeof item[event] === 'bigint') {
              Object.assign(item, {
                [event]: item[event].toString(),
              });
            }
          }
          return item;
        });
      });

    const ins = await this.finance.t_ins
      .findMany({
        select: {
          id: true,
          cid: true,
          inscl: true,
          subtype: true,
        },
        where: {
          cid: {
            in: pat.map((i) => i.person_id),
          },
        },
      })
      .then((itemPat) => {
        return itemPat.map((item) => {
          for (let event in item) {
            if (typeof item[event] === 'bigint') {
              Object.assign(item, {
                [event]: item[event].toString(),
              });
            }
          }
          return item;
        });
      });

    const patMapIns = pat.map((item) => {
      const pat_ins = ins.filter((i) => i.cid === item.person_id);

      if (pat_ins.length > 0) {
        Object.assign(item, {
          pat_ins,
        });
      }
      return item;
    });

    const opdMapPat = opd.map((item) => {
      const opd_pat = patMapIns.filter((i) => i.hn === item.hn);
      if (opd_pat.length > 0) {
        Object.assign(item, {
          opd_pat,
        });
      }
      return item;
    });

    const result = opdMapPat;
    return result;
  };

  ipdListSerive = async (startDate: string, endDate: string) => {
    const start = startDate.replaceAll('-', '');
    const end = endDate.replaceAll('-', '');
    const ipd = await this.finance.t_ipd
      .findMany({
        select: {
          id: true,
          hn: true,
          an: true,
          datedsc: true,
        },
        where: {
          datedsc: {
            gte: start,
            lte: end,
          },
        },
        take: 10,
      })
      .then((ipdItem) => {
        return ipdItem.map((item) => {
          for (let e in item) {
            if (typeof item[e] === 'bigint') {
              Object.assign(item, {
                [e]: item[e].toString(),
              });
            }
          }
          return item;
        });
      });

    const pat = await this.finance.t_pat
      .findMany({
        select: {
          id: true,
          hn: true,
          title: true,
          fname: true,
          lname: true,
          person_id: true,
        },
        where: { hn: { in: ipd.map((i) => i.hn) } },
      })
      .then((patItem) => {
        return patItem.map((item) => {
          for (let event in item) {
            if (typeof item[event] === 'bigint') {
              Object.assign(item, {
                [event]: item[event].toString(),
              });
            }
          }
          return item;
        });
      });

    const ins = await this.finance.t_ins
      .findMany({
        select: {
          id: true,
          cid: true,
          inscl: true,
          subtype: true,
        },
        where: {
          cid: {
            in: pat.map((i) => i.person_id),
          },
        },
      })
      .then((itemPat) => {
        return itemPat.map((item) => {
          for (let event in item) {
            if (typeof item[event] === 'bigint') {
              Object.assign(item, {
                [event]: item[event].toString(),
              });
            }
          }
          return item;
        });
      });

    const patMapIns = pat.map((item) => {
      const pat_ins = ins.filter((i) => i.cid === item.person_id);

      if (pat_ins.length > 0) {
        Object.assign(item, {
          pat_ins,
        });
      }
      return item;
    });

    const ipdMapPat = ipd.map((item) => {
      const ipd_pat = patMapIns.filter((i) => i.hn === item.hn);
      if (ipd_pat.length > 0) {
        Object.assign(item, {
          ipd_pat,
        });
      }
      return item;
    });

    const result = ipdMapPat;
    
    return result;
  };
}
